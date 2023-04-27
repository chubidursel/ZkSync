//import { Provider } from "zksync-web3";
import * as zksync from "zksync-web3";
import { ethers } from "ethers";
import dotenv from 'dotenv';
dotenv.config();


//  ----------- Default Provider --------------
//const provider = new zksync.Provider("https://testnet.era.zksync.dev");
// const defProvider = async() => {
//     //console.log(await provider.getMainContractAddress()); // L1 -> L2 SC
//     console.log(await provider.getBalance("0x98162D17D4d15c945B7418475EdEb4d9c0335684"))

// }
//defProvider()

// ---------- Wallet provider --------------

// const wall = async()=>{

//     const PRIVATE_KEY = process.env.PRIVATE_KEY;

//     const zkSyncProvider = new zksync.Provider("https://testnet.era.zksync.dev");

//     const ethereumProvider = ethers.getDefaultProvider("goerli");

//     const wallet = new zksync.Wallet(PRIVATE_KEY, zkSyncProvider, ethereumProvider);

//     console.log((await wallet.getBalance()).toString())
//     console.log(await wallet.getNonce())

// }
// wall()

// ------------- FUNC TO VERIFY TX ------------

const providerZk = new zksync.Provider("https://testnet.era.zksync.dev");

const provider = new ethers.providers.InfuraProvider('goerli');

const abi = [{"inputs":[{"internalType":"uint256","name":"_chainId","type":"uint256"},{"components":[{"components":[{"internalType":"address","name":"facet","type":"address"},{"internalType":"enum Diamond.Action","name":"action","type":"uint8"},{"internalType":"bool","name":"isFreezable","type":"bool"},{"internalType":"bytes4[]","name":"selectors","type":"bytes4[]"}],"internalType":"struct Diamond.FacetCut[]","name":"facetCuts","type":"tuple[]"},{"internalType":"address","name":"initAddress","type":"address"},{"internalType":"bytes","name":"initCalldata","type":"bytes"}],"internalType":"struct Diamond.DiamondCutData","name":"_diamondCut","type":"tuple"}],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"}]

const abiImpl = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EthWithdrawalFinalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"txId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"txHash","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"expirationTimestamp","type":"uint64"},{"components":[{"internalType":"uint256","name":"txType","type":"uint256"},{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"uint256","name":"gasPerPubdataByteLimit","type":"uint256"},{"internalType":"uint256","name":"maxFeePerGas","type":"uint256"},{"internalType":"uint256","name":"maxPriorityFeePerGas","type":"uint256"},{"internalType":"uint256","name":"paymaster","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256[4]","name":"reserved","type":"uint256[4]"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"uint256[]","name":"factoryDeps","type":"uint256[]"},{"internalType":"bytes","name":"paymasterInput","type":"bytes"},{"internalType":"bytes","name":"reservedDynamic","type":"bytes"}],"indexed":false,"internalType":"struct IMailbox.L2CanonicalTransaction","name":"transaction","type":"tuple"},{"indexed":false,"internalType":"bytes[]","name":"factoryDeps","type":"bytes[]"}],"name":"NewPriorityRequest","type":"event"},{"inputs":[{"internalType":"uint256","name":"_l2BlockNumber","type":"uint256"},{"internalType":"uint256","name":"_l2MessageIndex","type":"uint256"},{"internalType":"uint16","name":"_l2TxNumberInBlock","type":"uint16"},{"internalType":"bytes","name":"_message","type":"bytes"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"finalizeEthWithdrawal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_gasPrice","type":"uint256"},{"internalType":"uint256","name":"_l2GasLimit","type":"uint256"},{"internalType":"uint256","name":"_l2GasPerPubdataByteLimit","type":"uint256"}],"name":"l2TransactionBaseCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_l2TxHash","type":"bytes32"},{"internalType":"uint256","name":"_l2BlockNumber","type":"uint256"},{"internalType":"uint256","name":"_l2MessageIndex","type":"uint256"},{"internalType":"uint16","name":"_l2TxNumberInBlock","type":"uint16"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"},{"internalType":"enum TxStatus","name":"_status","type":"uint8"}],"name":"proveL1ToL2TransactionStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blockNumber","type":"uint256"},{"internalType":"uint256","name":"_index","type":"uint256"},{"components":[{"internalType":"uint8","name":"l2ShardId","type":"uint8"},{"internalType":"bool","name":"isService","type":"bool"},{"internalType":"uint16","name":"txNumberInBlock","type":"uint16"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"bytes32","name":"value","type":"bytes32"}],"internalType":"struct L2Log","name":"_log","type":"tuple"},{"internalType":"bytes32[]","name":"_proof","type":"bytes32[]"}],"name":"proveL2LogInclusion","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blockNumber","type":"uint256"},{"internalType":"uint256","name":"_index","type":"uint256"},{"components":[{"internalType":"uint16","name":"txNumberInBlock","type":"uint16"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct L2Message","name":"_message","type":"tuple"},{"internalType":"bytes32[]","name":"_proof","type":"bytes32[]"}],"name":"proveL2MessageInclusion","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contractL2","type":"address"},{"internalType":"uint256","name":"_l2Value","type":"uint256"},{"internalType":"bytes","name":"_calldata","type":"bytes"},{"internalType":"uint256","name":"_l2GasLimit","type":"uint256"},{"internalType":"uint256","name":"_l2GasPerPubdataByteLimit","type":"uint256"},{"internalType":"bytes[]","name":"_factoryDeps","type":"bytes[]"},{"internalType":"address","name":"_refundRecipient","type":"address"}],"name":"requestL2Transaction","outputs":[{"internalType":"bytes32","name":"canonicalTxHash","type":"bytes32"}],"stateMutability":"payable","type":"function"}]

const contractAddress = "0x1908e2BF4a88F91E4eF0DC72f02b8Ea36BEa2319"

const contract = new ethers.Contract(contractAddress, abiImpl, provider);

const methodId = '0x4531cd5795773d7101c17bdeb9f5ab7f47d7056017506f937083be5d6e77a382';

const senderAddress = '0x98162D17D4d15c945B7418475EdEb4d9c0335684'


const verifyTx = async()=>{


    // const filter = {
    //     address: contractAddress,
    //     topics: [methodId],
    //     fromBlock: 0,
    //     toBlock: 'latest'
    //   };
    // const logs = await contract.queryFilter(filter)

    //const filter = contract.filters.EthWithdrawalFinalized(senderAddress);
    const filter = contract.filters.requestL2Transaction();
    const events = await contract.queryFilter(filter);
    console.log(events)

}
verifyTx()


async function logContractFunctions() {

  const functions = contract.interface.events;
  console.log(functions)
  
  //console.log(`Contract functions: ${JSON.stringify(functions, null, 2)}`);
}

//logContractFunctions();

