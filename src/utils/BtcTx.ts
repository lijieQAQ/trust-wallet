import * as bitcoin from "bitcoinjs-lib";
import axios from "axios";
import BigNumber from "bignumber.js";
import { TransactionModel } from "@/Data/Transaction";

export async function btcTx(privateKey, address, amount) {
  const network = bitcoin.networks.bitcoin;
  const quantitySat = new BigNumber(amount).times(1e8).toNumber();
  const feeSat = new BigNumber(amount).times(1e8).toNumber();
  try {
    const keyPair = bitcoin.ECPair.fromWIF(privateKey, network);
    const p2pkh = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: network });
    const from = p2pkh.address;
    const utxoResponse = await axios(
      `https://api.blockcypher.com/v1/btc/main/addrs/${from}`
    );
    const json = await utxoResponse.data;
    let balance = json.balance;
    let unspentList = [];
    const txrefs = json.txrefs;
    const unconfirmed_txrefs = json.unconfirmed_txrefs;
    if (unconfirmed_txrefs && unconfirmed_txrefs.length > 0) {
      // 要把未确认的余额给去掉
      balance += json.unconfirmed_balance;
      unspentList = unspentList.concat(
        unconfirmed_txrefs.filter(
          (item) => !item.spent_by && item.tx_output_n !== -1
        )
      );
    }
    if (txrefs.length > 0) {
      unspentList = unspentList.concat(
        txrefs.filter((item) => !item.spent_by && item.tx_output_n !== -1)
      );
    }

    // 构建交易对象
    const txb = new bitcoin.TransactionBuilder(network);

    // 批量插入未花费交易
    unspentList.forEach((item) => txb.addInput(item.tx_hash, item.tx_output_n));
    // 转出账户
    txb.addOutput(address, quantitySat);
    // 预留手续费
    txb.addOutput(from, balance - quantitySat - feeSat);
    // 批量签名，根据索引即可
    unspentList.forEach((item, index) => {
      txb.sign(index, keyPair);
    });
    const tx = txb.build();
    const res = await axios.post(
      "https://api.blockcypher.com/v1/btc/main/txs/push",
      {
        tx: tx.toHex(),
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res && res.data) {
      if (res.data.tx) {
        const transaction: TransactionModel = {
          to: address,
          form: from,
          amount: amount,
          hash: res.data.tx.hash,
        };
        const btcTransaction = localStorage.getItem("btcTransaction");
        if (btcTransaction) {
          const eths: Array<TransactionModel> = JSON.parse(btcTransaction);
          eths.push(transaction);
          localStorage.setItem("btcTransaction", JSON.stringify(eths));
        } else {
          localStorage.setItem("btcTransaction", JSON.stringify([transaction]))
        }
        return res.data.tx.hash;
      }
    }
  } catch (error) {
    return error.message;
  }
}
