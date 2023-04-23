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

const wall = async()=>{

    const PRIVATE_KEY = process.env.PRIVATE_KEY;

    const zkSyncProvider = new zksync.Provider("https://testnet.era.zksync.dev");

    const ethereumProvider = ethers.getDefaultProvider("goerli");

    const wallet = new zksync.Wallet(PRIVATE_KEY, zkSyncProvider, ethereumProvider);

    console.log((await wallet.getBalance()).toString())
    console.log(await wallet.getNonce())

}
wall()