
const { expect } = require("chai");
const { parseUnits, formatUnits } = require("@ethersproject/units");

const { ethers } = require("hardhat");

const nftFactoryAddress = '0xFa6007B2f10552C3e97aECA55E1D04B667EC1a7E'
let nftFactory;
describe("NFTFactory", function() {

	before(async () => {
		nftFactory = await ethers.getContractAt("NFTFactory", nftFactoryAddress);
	})

	it.only('mints an NFT', async() => {
		const [owner] = await ethers.getSigners();

		const balance = await nftFactory.balanceOf(owner.address)
		console.log(balance.toString())

		// let contract = new ethers.Contract(contractAddress, abi, ethers.provider);
		const tokenMetadata = ethers.utils.formatBytes32String("howdie:" + balance.toString())

		const res = await nftFactory.issue(tokenMetadata)
		console.log(res)
	})
	
	it.only('get the balance of the NFT', async() => {
		const [owner] = await ethers.getSigners();

		// get balanceOf
		const balance = await nftFactory.balanceOf(owner.address)
		console.log(balance.toString())
	})
})