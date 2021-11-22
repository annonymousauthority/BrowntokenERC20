
const Browntoken = artifacts.require("Browntoken");

module.exports = function(deployer) {
  deployer.deploy(Browntoken);
};
