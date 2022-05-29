const skilldapp = artifacts.require('skilldapp');
// Deploys the smart contract "skilldapp"
module.exports = function (deployer) {
  deployer.deploy(skilldapp);
};
