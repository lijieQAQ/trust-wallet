import TronWeb from "tronweb";
import { TransactionModel } from "@/Data/Transaction";

export async function trxTx(privateKey: string, address: string, amount: string, from: string) {
  const tronWeb = new TronWeb({
    fullHost: "https://api.trongrid.io/",
    headers: { "TRON-PRO-API-KEY": "d4051326-d9dc-4c2d-93e1-0e306e5dae88" },
  });
  try {
    const tradeobj = await tronWeb.transactionBuilder.sendTrx(address, tronWeb.toSun(amount), from);
    const signedtxn = await tronWeb.trx.sign(tradeobj, privateKey.substr(2));
    const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);
    const transaction: TransactionModel = {
      to: address,
      form: from,
      amount: amount,
      hash: receipt.transaction.txID,
    };
    const trxTransaction = localStorage.getItem("trxTransaction");
    if (trxTransaction) {
      const trxs: Array<TransactionModel> = JSON.parse(trxTransaction);
      trxs.push(transaction);
      localStorage.setItem("trxTransaction", JSON.stringify(trxs));
    } else {
      localStorage.setItem("trxTransaction", JSON.stringify([transaction]))
    }
    return receipt.transaction.txID;
  } catch (e) {
    return e;
  };
}
