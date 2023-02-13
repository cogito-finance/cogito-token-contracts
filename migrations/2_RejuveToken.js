let RejuveToken = artifacts.require("./RejuveToken.sol");

const name = "Rejuve Token"
const symbol = "RJV"

module.exports = function (deployer) {
    deployer.deploy(RejuveToken, name, symbol);
  };
