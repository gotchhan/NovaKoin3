const ConvertLib = artifacts.require("ConvertLib");
const NovaKoin3 = artifacts.require("NovaKoin3");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, NovaKoin3);
  deployer.deploy(NovaKoin3);
};
