const { expect } = require("chai");

const { parseUnits, formatUnits } = require("@ethersproject/units");

// describe("CreditExecutor", function() {
//   it("Should return the new greeting once it's changed", async function() {

//   	const [owner] = await ethers.getSigners();
//   	console.log(owner.address)
//   	const CreditExecutor = await ethers.getContractFactory("CreditExecutor");
//     const executor = await CreditExecutor.deploy();

//   	// get account
//     await executor.deployed();
//     await executor.setGreeting("Hola, mundo!");
//     expect(await executor.greet()).to.equal("Hola, mundo!");
//   });
// });
const { ethers } = require("hardhat");
const abi = [{
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
                  },
                  {
                      "constant": false,
                      "inputs": [
                          {
                              "name": "_spender",
                              "type": "address"
                          },
                          {
                              "name": "_value",
                              "type": "uint256"
                          }
                      ],
                      "name": "approve",
                      "outputs": [
                          {
                              "name": "",
                              "type": "bool"
                          }
                      ],
                      "payable": false,
                      "stateMutability": "nonpayable",
                      "type": "function"
                  },
                  {
                      "constant": true,
                      "inputs": [],
                      "name": "totalSupply",
                      "outputs": [
                          {
                              "name": "",
                              "type": "uint256"
                          }
                      ],
                      "payable": false,
                      "stateMutability": "view",
                      "type": "function"
                  },
                  {
                      "constant": false,
                      "inputs": [
                          {
                              "name": "_from",
                              "type": "address"
                          },
                          {
                              "name": "_to",
                              "type": "address"
                          },
                          {
                              "name": "_value",
                              "type": "uint256"
                          }
                      ],
                      "name": "transferFrom",
                      "outputs": [
                          {
                              "name": "",
                              "type": "bool"
                          }
                      ],
                      "payable": false,
                      "stateMutability": "nonpayable",
                      "type": "function"
                  },
                  {
                      "constant": true,
                      "inputs": [],
                      "name": "decimals",
                      "outputs": [
                          {
                              "name": "",
                              "type": "uint8"
                          }
                      ],
                      "payable": false,
                      "stateMutability": "view",
                      "type": "function"
                  },
                  {
                      "constant": true,
                      "inputs": [
                          {
                              "name": "_owner",
                              "type": "address"
                          }
                      ],
                      "name": "balanceOf",
                      "outputs": [
                          {
                              "name": "balance",
                              "type": "uint256"
                          }
                      ],
                      "payable": false,
                      "stateMutability": "view",
                      "type": "function"
                  },
                  {
                      "constant": true,
                      "inputs": [],
                      "name": "symbol",
                      "outputs": [
                          {
                              "name": "",
                              "type": "string"
                          }
                      ],
                      "payable": false,
                      "stateMutability": "view",
                      "type": "function"
                  },
                  {
                      "constant": false,
                      "inputs": [
                          {
                              "name": "_to",
                              "type": "address"
                          },
                          {
                              "name": "_value",
                              "type": "uint256"
                          }
                      ],
                      "name": "transfer",
                      "outputs": [
                          {
                              "name": "",
                              "type": "bool"
                          }
                      ],
                      "payable": false,
                      "stateMutability": "nonpayable",
                      "type": "function"
                  },
                  {
                      "constant": true,
                      "inputs": [
                          {
                              "name": "_owner",
                              "type": "address"
                          },
                          {
                              "name": "_spender",
                              "type": "address"
                          }
                      ],
                      "name": "allowance",
                      "outputs": [
                          {
                              "name": "",
                              "type": "uint256"
                          }
                      ],
                      "payable": false,
                      "stateMutability": "view",
                      "type": "function"
                  },
                  {
                      "payable": true,
                      "stateMutability": "payable",
                      "type": "fallback"
                  },
                  {
                      "anonymous": false,
                      "inputs": [
                          {
                              "indexed": true,
                              "name": "owner",
                              "type": "address"
                          },
                          {
                              "indexed": true,
                              "name": "spender",
                              "type": "address"
                          },
                          {
                              "indexed": false,
                              "name": "value",
                              "type": "uint256"
                          }
                      ],
                      "name": "Approval",
                      "type": "event"
                  },
                  {
                      "anonymous": false,
                      "inputs": [
                          {
                              "indexed": true,
                              "name": "from",
                              "type": "address"
                          },
                          {
                              "indexed": true,
                              "name": "to",
                              "type": "address"
                          },
                          {
                              "indexed": false,
                              "name": "value",
                              "type": "uint256"
                          }
                      ],
                      "name": "Transfer",
                      "type": "event"
                  }]
const daiContractAddress = "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa";


describe("DAIFaucet", function() {

  it('Swap Eth for DAI', async () => {

    const [owner] = await ethers.getSigners();
    console.log(owner.address)

    // deploy
    // const DAIFaucet = await ethers.getContractFactory("DAIFaucet");

    // on kovan
    // const v2RouterUniSwap = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
    // const DaiAddress = "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa";
    // const faucet = await DaiFaucet.deploy("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa");

    // send transaction
    console.log(ethers)

      // // Acccounts now exposed
      const params = [{
          from: owner.address,
          to: "0x47534DB1A8D9aDAedF61B53A9f864EC3f56c6e21",
          value: ethers.utils.parseUnits('0.2', 'ether').toHexString()
      }];

      console.log(params)

      const transactionHash = await ethers.provider.send('eth_sendTransaction', params)
      console.log('transactionHash is ' + transactionHash);    
      // get balance of dai from owner

  });

  it.only('gets DAI balance', async () => {
    const [owner] = await ethers.getSigners();

    // The address from the above deployment example
    // We connect to the Contract using a Provider, so we will only
    // have read-only access to the Contract
    let contract = new ethers.Contract(daiContractAddress, abi, ethers.provider);
    const balance = await contract.balanceOf(owner.address)
    console.log(balance.toString())

  })

  it('sets greeting deposit', async() => {
    const contract = await ethers.getContractAt("CreditExecutor", '0xf5d30fce6ae1049e6182402e4efbcd522b81715a');
    console.log(contract)

    // let contract = new ethers.Contract(contractAddress, abi, ethers.provider);
    const res = await contract.setGreeting("howdie")
    console.log(res)

  })

  it('sets greeting deposit', async() => {
    const contract = await ethers.getContractAt("CreditExecutor", '0xf5d30fce6ae1049e6182402e4efbcd522b81715a');

    const res2 = await contract.getGreeting()
    console.log(res2)

  })

  it.only('sets transaction into the pool', async() => {

    const [owner] = await ethers.getSigners();

    const creditExecutor = await ethers.getContractAt("CreditExecutor", '0xf5d30fce6ae1049e6182402e4efbcd522b81715a');
    let amount = 10;
    let amountToDeposit = parseUnits(amount.toString(), 18)
    // let deposit = await lendingPoolContract.deposit(assetData.tokenAddress, amountToDeposit, address, 0)
    let amountToApprove = amountToDeposit;

    console.log('deposit', amountToDeposit.toString())
    console.log(owner)
    console.log(ethers.provider)
    console.log(ethers.Contract)

    // var wallet = new Wallet(privateKey, ethers.provider);

        // get dai contract
    let daiContract = new ethers.Contract(daiContractAddress, abi, );
    let approval = await daiContract.approve("0xf5d30fce6ae1049e6182402e4efbcd522b81715a", amountToApprove)
    console.log('approval')
    // console.log(approval)
    // console.log(approval.toString())

    // deposit
    const res = await creditExecutor.depositCollateral('0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa', amountToDeposit, true)
    console.log(res)


    // perform test to see allowance
    let allowance = await daiContract.allowance(owner.address, "0x9FE532197ad76c5a68961439604C037EB79681F0")
    console.log(allowance)
    console.log(allowance.toString())
  })

  it.only('gets DAI balance', async () => {
    const [owner] = await ethers.getSigners();
    // We connect to the Contract using a Provider, so we will only
    // have read-only access to the Contract
    let contract = new ethers.Contract(daiContractAddress, abi, ethers.provider);
    const balance = await contract.balanceOf(owner.address)
    console.log(balance.toString())

  })
  // check allowance
})