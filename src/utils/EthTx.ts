import Web3 from "web3";
import * as util from "ethereumjs-util";
import * as Tx from "ethereumjs-tx";
import { TransactionModel } from "@/Data/Transaction";
const Ethtx = Tx.Transaction;
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/c9069e41f4ca4830bc7229c376099150"));

export async function ethTx(privateKey, address, amount, from) {
  const count = await web3.eth.getTransactionCount(from); // 获取交易笔数
  const gasPrice = await web3.eth.getGasPrice();
  const rawTx = {
    gasPrice: web3.utils.toHex(gasPrice), // gasPrice
    gasLimit: web3.utils.toHex(300000), // gasLimit
    nonce: util.intToHex(count), // 交易nonce 交易次数
    to: address, // to地址
    value: web3.utils.toHex(web3.utils.toWei(amount)), // 交易金额
    data: "0x0", // 备注
  };
  const tx = new Ethtx(rawTx, { chain: "ropsten" });
  tx.sign(Buffer.from(privateKey.substr(2), "hex"));
  const serializedTx = tx.serialize();
  try {
    const result = await web3.eth.sendSignedTransaction(
      "0x" + serializedTx.toString("hex")
    ); // 交易信息
    const transaction: TransactionModel = {
      to: address,
      form: from,
      amount: amount,
      hash: result.transactionHash,
    };
    const ethTransaction = localStorage.getItem("ethTransaction");
    if (ethTransaction) {
      const eths: Array<TransactionModel> = JSON.parse(ethTransaction);
      eths.push(transaction);
      localStorage.setItem("ethTransaction", JSON.stringify(eths));
    } else {
      localStorage.setItem("ethTransaction", JSON.stringify([transaction]))
    }
    return result.transactionHash;
  } catch (e) {
    if (e.message && e.message.indexOf("Returned error:")) {
      return e.message.split("Returned error:")[1];
    }
    return e.message;
  }
}
