const { expect } = require("chai");

describe("CreditExecutor", function() {
  it("Should return the new greeting once it's changed", async function() {

  	const [owner] = await ethers.getSigners();
  	console.log(owner.address)
  	const CreditExecutor = await ethers.getContractFactory("CreditExecutor");
    const executor = await CreditExecutor.deploy();

  	// get account
    await executor.deployed();
    await executor.setGreeting("Hola, mundo!");
    expect(await executor.greet()).to.equal("Hola, mundo!");
  });
});
