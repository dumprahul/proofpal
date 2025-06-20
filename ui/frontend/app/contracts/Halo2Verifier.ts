export const Halo2VerifierABI =[
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "proof",
				"type": "bytes"
			},
			{
				"internalType": "uint256[]",
				"name": "instances",
				"type": "uint256[]"
			}
		],
		"name": "verifyProof",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
] as const;

export const Halo2VerifierAddress = "0x05471a914D01A4aF5E91Ede5CaBfC4AfE33a0c3e"; // Replace with actual deployed contract address 