let RejuveToken = artifacts.require("./RejuveToken.sol");

const name = "Rejuve Token"
const symbol = "TBD"

module.exports = function (deployer) {
    deployer.deploy(RejuveToken, name, symbol);
  };
