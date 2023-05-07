import * as zksync from "zksync-web3";


const providerZk = new zksync.Provider("https://testnet.era.zksync.dev");



const test = async () => {
    // console.log(await providerZk.getBlockNumber())

    // const useAddress = '0x98162D17D4d15c945B7418475EdEb4d9c0335684'
    // const blockNumber = 1000;

    const transactions = await providerZk;

    console.log(transactions)

}

test()