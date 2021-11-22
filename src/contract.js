import { Web3 } from "web3";
const BrowntokenABI = require('./build/contracts/Browntoken.json')

document.getElementById("btn-login").onclick = getTransactions;

export const getTransactions = async () =>{
    console.log(await Web3.eth.getAccounts())
    const Contract = Web3.eth.Contract(BrowntokenABI.abi, "0x62316331d7A024E56966baC81800D69CdDD62362", {from: '0x3CA0FdaC79A84138dfC00DaA3Dfa1AfE0752EE4a', gas:5500000 } )
    console.log(Contract)

}

