require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// Go to https://infura.io/ and create a new project
// Replace this with your Infura project ID
const ALCHEMY_URL = "https://eth-kovan.alchemyapi.io/v2/vr9Aqh5NlalhbDdrqi6Zv3t58LQVqHic";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const KOVAN_PRIVATE_KEY = "958f4a86d1e254f57b11e7b2e6f0fb14e2fb723e2866aae666c8a4af1fb76ccb";

module.exports = {
  solidity: "0.7.3",
  networks: {
    kovan: {
      url: `${ALCHEMY_URL}`,
      accounts: [`0x${KOVAN_PRIVATE_KEY}`]
    }
  }
};
