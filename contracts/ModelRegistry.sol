// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract ModelMarketplace {
    address public owner;
    uint256 public constant PLATFORM_FEE = 100; // 1% in basis points
    uint256 public modelCount;
    uint256 public contractBalance; // Track the contract's balance

    struct Model {
        uint256 id;
        string name;
        string ipfsLink;
        string description;
        uint256 price; // price per usage in wei
        address payable provider;
        uint256 registrationTime;
        string category; // e.g., "computer vision", "nlp", "generative"
        string version;
        string[] tags;
    }

    mapping(uint256 => Model) public models;
    mapping(address => uint256[]) public providerModels;

    event ModelRegistered(
        uint256 indexed id,
        string name,
        address indexed provider,
        uint256 registrationFee
    );
    event ModelUsed(uint256 indexed id, address indexed user, uint256 payment);
    event ModelUpdated(uint256 indexed id, string name);
    event FeesWithdrawn(uint256 amount, address recipient);

    constructor() {
        owner = msg.sender;
        modelCount = 0;
        contractBalance = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier onlyModelProvider(uint256 _modelId) {
        require(
            models[_modelId].provider == msg.sender,
            "Only model provider can call this function"
        );
        _;
    }

    function registerModel(
        string memory _name,
        string memory _ipfsLink,
        string memory _description,
        uint256 _price,
        string memory _category,
        string memory _version,
        string[] memory _tags
    ) public payable returns (uint256) {
        require(bytes(_name).length > 0, "Model name cannot be empty");
        require(bytes(_ipfsLink).length > 0, "IPFS link cannot be empty");
        require(_price > 0, "Price must be greater than 0");

        // Calculate 1% of the model price as registration fee
        uint256 registrationFee = (_price * PLATFORM_FEE) / 10000;

        // Ensure the sender has sent enough ETH to cover the registration fee
        require(msg.value >= registrationFee, "Insufficient registration fee");

        // Add the registration fee to the contract balance
        contractBalance += registrationFee;

        // Return any excess ETH sent
        if (msg.value > registrationFee) {
            payable(msg.sender).transfer(msg.value - registrationFee);
        }

        uint256 modelId = modelCount + 1;
        Model storage newModel = models[modelId];

        newModel.id = modelId;
        newModel.name = _name;
        newModel.ipfsLink = _ipfsLink;
        newModel.description = _description;
        newModel.price = _price;
        newModel.provider = payable(msg.sender);
        newModel.registrationTime = block.timestamp;
        newModel.category = _category;
        newModel.version = _version;
        newModel.tags = _tags;

        providerModels[msg.sender].push(modelId);
        modelCount = modelId;

        emit ModelRegistered(modelId, _name, msg.sender, registrationFee);
        return modelId;
    }

    function useModel(uint256 _modelId) public payable {
        Model storage model = models[_modelId];
        require(model.id > 0, "Model does not exist");
        require(msg.value >= model.price, "Insufficient payment");

        uint256 platformCut = (msg.value * PLATFORM_FEE) / 10000;
        uint256 providerCut = msg.value - platformCut;

        contractBalance += platformCut;
        model.provider.transfer(providerCut);

        emit ModelUsed(_modelId, msg.sender, msg.value);
    }

    function updateModel(
        uint256 _modelId,
        string memory _name,
        string memory _description,
        uint256 _price,
        string memory _version,
        string[] memory _tags
    ) public onlyModelProvider(_modelId) {
        Model storage model = models[_modelId];

        if (bytes(_name).length > 0) {
            model.name = _name;
        }

        if (bytes(_description).length > 0) {
            model.description = _description;
        }

        if (_price > 0) {
            model.price = _price;
        }

        if (bytes(_version).length > 0) {
            model.version = _version;
        }

        if (_tags.length > 0) {
            model.tags = _tags;
        }

        emit ModelUpdated(_modelId, model.name);
    }

    function getProviderModels(
        address _provider
    ) public view returns (uint256[] memory) {
        return providerModels[_provider];
    }

    function withdrawFees() public onlyOwner {
        uint256 amount = contractBalance;
        require(amount > 0, "No fees to withdraw");

        contractBalance = 0;
        payable(owner).transfer(amount);

        emit FeesWithdrawn(amount, owner);
    }

    function getContractBalance() public view returns (uint256) {
        return contractBalance;
    }

    function getModelDetails(
        uint256 _modelId
    )
        public
        view
        returns (
            string memory name,
            string memory ipfsLink,
            string memory description,
            uint256 price,
            address provider,
            uint256 registrationTime,
            string memory category,
            string memory version
        )
    {
        Model storage model = models[_modelId];
        return (
            model.name,
            model.ipfsLink,
            model.description,
            model.price,
            model.provider,
            model.registrationTime,
            model.category,
            model.version
        );
    }

    function getModelTags(
        uint256 _modelId
    ) public view returns (string[] memory) {
        return models[_modelId].tags;
    }
}
