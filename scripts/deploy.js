// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");


async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  await hre.run('compile');

  // We get the contract to deploy
  const CreditExecutor = await ethers.getContractFactory("CreditExecutor");
  

  const executor = await CreditExecutor.deploy();


  await executor.deployed();
  
  const DAIFaucet = await ethers.getContractFactory("DAIFaucet");
  const faucet = await DAIFaucet.deploy(
    "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"
    );
  
  await faucet.deployed();

  console.log("CreditExecutor deployed to:", executor.address);
  console.log("DAIFaucet deployed to:", faucet.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
