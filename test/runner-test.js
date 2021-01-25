const { expect } = require("chai");
const { parseUnits, formatUnits } = require("@ethersproject/units");

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


const daiFaucetAddress = "0x47534DB1A8D9aDAedF61B53A9f864EC3f56c6e21";
const daiContractAddress = "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa";
const creditExecutorAddress = "0xf5d30fce6ae1049e6182402e4efbcd522b81715a";


describe("DAIFaucet", function() {

  it('Swap Eth for DAI', async () => {

    const [owner] = await ethers.getSigners();
    console.log(owner.address)

    // TODO: Seperate out into scripts file for DaiFaucet deployment
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
          to: daiFaucetAddress,
          value: ethers.utils.parseUnits('0.01', 'ether').toHexString()
      }];

      console.log(params)

      const transactionHash = await ethers.provider.send('eth_sendTransaction', params)
      console.log('transactionHash is ' + transactionHash);    
      // get balance of dai from owner

  });


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

  it.only('gets DAI balance', async () => {
    const [owner] = await ethers.getSigners();

    // The address from the above deployment example
    // We connect to the Contract using a Provider, so we will only
    // have read-only access to the Contract
    let contract = new ethers.Contract(daiContractAddress, abi, ethers.provider);
    const balance = await contract.balanceOf(owner.address)
    console.log(balance.toString())

  })

  it('sets amount of approval into the pool', async() => {

    const [owner] = await ethers.getSigners();

    let amount = 10;
    let amountToDeposit = parseUnits(amount.toString(), 18)
    // let deposit = await lendingPoolContract.deposit(assetData.tokenAddress, amountToDeposit, address, 0)
    let amountToApprove = amountToDeposit;

    console.log('deposit', amountToDeposit.toString())
    console.log(owner)

    // var wallet = new Wallet(privateKey, ethers.provider);

        // get dai contract
    let daiContract = new ethers.Contract(daiContractAddress, abi, owner);
    let approval = await daiContract.approve(creditExecutorAddress, amountToApprove)

    console.log('approval')
    // console.log(approval)
    // console.log(approval.toString())

        // perform test to see allowance
    let allowance = await daiContract.allowance(owner.address, creditExecutorAddress)
    console.log("allowance")
    console.log(allowance.toString())

  })





  // TODO: Get this to work
  it.only('depositCollateral in the pool', async () => {
    const [owner] = await ethers.getSigners();
    let amount = 10;
    let amountToDeposit = parseUnits(amount.toString(), 18)
    console.log('deposit', amountToDeposit.toString())

    const creditExecutor = await ethers.getContractAt("CreditExecutor", creditExecutorAddress);
    // deposit
    const res = await creditExecutor.depositCollateral(daiContractAddress, amountToDeposit, false)
    console.log(res)
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