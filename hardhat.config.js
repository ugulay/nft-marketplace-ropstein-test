require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },    
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/d8q-pYZmiD5-oxQNVqF7LG059Q-_vyx4",
      accounts: [privateKey]
    },
    /*
    mumbai: {
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },

    kovan: {
      url: "https://kovan.infura.io/v3/f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8",
      accounts: [privateKey]
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8",
      accounts: [privateKey]
    },
    goerli: {
      url: "https://goerli.infura.io/v3/f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8",
      accounts: [privateKey]
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8",
      accounts: [privateKey]
    },
    localhost: {
      url: "http://localhost:8545"
    }*/
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200
      }
    }
  }
}