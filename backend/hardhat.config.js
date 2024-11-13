require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.0",
  networks: {
    // Configuration for local network (Hardhat Network)
    hardhat: {
      chainId: 1337,
    },
    // Add configuration for testnet/mainnet if needed
    // For example, Rinkeby or Goerli Testnet:
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID`,  // Infura URL
      accounts: [`0x${process.env.PRIVATE_KEY}`],  // Private key of your wallet
    }
  },
};
