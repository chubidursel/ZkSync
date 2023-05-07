
import { Contract, ethers } from "ethers";
import { EtherscanProvider } from '@ethersproject/providers';



const provider = new ethers.providers.InfuraProvider('goerli');

const provider2 = new EtherscanProvider('goerli');


// Define the Ethereum address to retrieve transactions for
const myAddress = '0x98162D17D4d15c945B7418475EdEb4d9c0335684';

const contractAddress = '0x1908e2BF4a88F91E4eF0DC72f02b8Ea36BEa2319'

const startBlock = 8691465; // provdier.currentBolck - 100
const endBlock = startBlock + 10000;

// EXAMPLE!!!!!!   Retrieve all transactions for the Ethereum address
// provider2.getHistory(myAddress, startBlock, endBlock).then((transactions) => {
//   console.log(`Transactions for address ${myAddress}:`);
//   console.log("length:   ", transactions.length)
//   console.log(transactions)
//   transactions.forEach((tx) => {
//     console.log(`Transaction hash: ${tx.hash}`);
//     console.log(`Block number: ${tx.blockNumber}`);
//     console.log(`From: ${tx.from}`);
//     console.log(`To: ${tx.to}`);
//     console.log(`Value: ${ethers.utils.formatEther(tx.value)} ETH`);
//     console.log(`Gas limit: ${tx.gasLimit}`);
//     console.log(`Gas price: ${ethers.utils.formatUnits(tx.gasPrice, 'gwei')} GWEI`);
//     console.log(`Data: ${tx.data}`);
//     console.log('------------------------');
//   });
// }).catch((error) => {
//   console.error(error);
// });

// ------ ZKEasy -------

provider2.getHistory(myAddress, startBlock).then((transactions) => {
    console.log(`Transactions for address ${myAddress}:`);
    console.log(transactions)
    transactions.forEach((tx) => {
      console.log(`To: ${tx.to}`);
      if(tx.to == contractAddress){
        console.log("Yahoooo! It works!!!!")
      }

      console.log('------------------------');
    });
  }).catch((error) => {
    console.error(error);
  });