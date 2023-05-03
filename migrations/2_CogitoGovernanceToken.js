let CogitoGovernanceToken = artifacts.require("./CogitoGovernanceToken.sol");

const name = "Cogito Governance Token"
const symbol = "CGV"

module.exports = function (deployer) {
    deployer.deploy(CogitoGovernanceToken, name, symbol);
  };
