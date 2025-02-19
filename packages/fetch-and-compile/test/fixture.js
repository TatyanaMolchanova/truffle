const fs = require("fs");
const path = require("path");

const mainnetData = {
  status: "1",
  message: "OK-Missing/Invalid API Key, rate limit of 1/5sec applied",
  result: [
    {
      SourceCode: fs.readFileSync(
        path.resolve(__dirname, "./sources/mainnet.sol"),
        "utf8"
      ),
      ABI: fs.readFileSync(
        path.resolve(__dirname, "./sources/mainnet.abi.json"),
        "utf8"
      ),
      ContractName: "UniswapV2Router02",
      CompilerVersion: "v0.6.6+commit.6c089d02",
      OptimizationUsed: "1",
      Runs: "999999",
      ConstructorArguments:
        "0000000000000000000000005c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      EVMVersion: "istanbul",
      Library: "",
      LicenseType: "GNU GPLv3",
      Proxy: "0",
      Implementation: "",
      SwarmSource:
        "ipfs://6dd6e03c4b2c0a8e55214926227ae9e2d6f9fec2ce74a6446d615afa355c84f3"
    }
  ]
};
const arbitrumData = {
  status: "1",
  message: "OK",
  result: [
    {
      SourceCode: fs.readFileSync(
        path.resolve(__dirname, "./sources/arbitrum.sol"),
        "utf8"
      ),
      ABI: fs.readFileSync(
        path.resolve(__dirname, "./sources/arbitrum.abi.json"),
        "utf8"
      ),
      ContractName: "Storage",
      CompilerVersion: "v0.8.4+commit.c7e474f2",
      OptimizationUsed: "1",
      Runs: "1000",
      ConstructorArguments:
        "0000000000000000000000009f20de1fc9b161b34089cbeae888168b44b03461",
      EVMVersion: "Default",
      Library: "",
      LicenseType: "",
      Proxy: "0",
      Implementation: "",
      SwarmSource: ""
    }
  ]
};
const polygonData = {
  status: "1",
  message: "OK-Missing/Invalid API Key, rate limit of 1/5sec applied",
  result: [
    {
      SourceCode: fs.readFileSync(
        path.resolve(__dirname, "./sources/polygon.sol"),
        "utf8"
      ),
      ABI: fs.readFileSync(
        path.resolve(__dirname, "./sources/polygon.abi.json"),
        "utf8"
      ),
      ContractName: "GrowthVault",
      CompilerVersion: "v0.8.9+commit.e5eed63a",
      OptimizationUsed: "1",
      Runs: "200",
      ConstructorArguments:
        "000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001800000000000000000000000003324af8417844e70b81555a6d1568d78f4d4bf1f000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000010000000000000000000000001948abc5400aa1d72223882958da3bec643fb4e50000000000000000000000001b02da8cb0d097eb8d57a175b88c7d8b47997506000000000000000000000000c2132d05d31c914a87c6611c10748aeb04b58e8f000000000000000000000000d3b71117e6c1558c1553305b44988cd944e97300000000000000000000000000a5e0829caced8ffdd4de3c43696c57f7d7a678ff0000000000000000000000000000000000000000000000000000000000000007536861726520560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025356000000000000000000000000000000000000000000000000000000000000",
      EVMVersion: "Default",
      Library: "",
      LicenseType: "MIT",
      Proxy: "0",
      Implementation: "",
      SwarmSource:
        "ipfs://4b803eff2b53da590615ae9571dfcb7a4fa564c5f1d196b7e24bac3dcf52f96d"
    }
  ]
};
module.exports = { mainnetData, arbitrumData, polygonData };
