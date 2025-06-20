# ProofPal - Decentralized zkML Platform built on Mantle.

**Project Description:**

A zkML model execution and verification hub powered by zero-knowledge proofs on the Mantle blockchain.

**setup demo video** - https://youtu.be/YspaSgdw8aY

**Deployed Contracts on Mantle Testnet**

Halo2VerifierCircuit.sol - https://sepolia.mantlescan.xyz/address/0x05471a914D01A4aF5E91Ede5CaBfC4AfE33a0c3e#code

1. Contract Address :
 ```bash
    0x05471a914D01A4aF5E91Ede5CaBfC4AfE33a0c3e
 ```

ModelRegistery.sol - https://sepolia.mantlescan.xyz/tx/0x28c398ffefe45e778d6afefdd9a546dd1f2121888f824ae93314da05791fa186

2. Contract Address :
 ```bash
    0x1447EEE46ed0432B46638fa6B44E0191d19212CA
 ```

Setup for ProofPal in your Local Machine:

1.Download ezkl CLI

 ```bash
    curl https://raw.githubusercontent.com/zkonduit/ezkl/main/install_ezkl_cli.sh | bash
 ```
2.Check the ezkl version in terminal

 ```bash
    ezkl --version
 ```
2.After successful installation, clone the repo

 ```bash
    git clone https://github.com/dumprahul/proofpal
    cd proofpal
    cd ui
    cd frontend
    npm install
 ```

3. Download the circuits and respective keys from the link:

 ```bash
   https://drive.google.com/drive/folders/1Gv-lii3oaGv8xiXzjQlhkzQ7ThXX1zuF?usp=sharing
 ```

4. Paste the ezkl folder into /frontend folder.

5. Now run the ProofPal:

 ```bash
   npm run dev
 ```
