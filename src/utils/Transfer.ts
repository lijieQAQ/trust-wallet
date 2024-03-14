import { btcTx } from "./BtcTx"
import { ethTx } from "./EthTx"
import { bnbTx } from "./BnbTx"
import { trxTx } from "./TrxTx"
import { decryptByDES } from "@/utils/Des";
import { LocalWalletModel } from "@/Data/Wallet";
import { SolanaTx } from "./SolanaTx";

export async function transfer(address: string, amount: string) {
  let walletObj = null;
  const walletStr = localStorage.getItem("wallet");
  if (walletStr) {
    const walletArr: Array<LocalWalletModel> = JSON.parse(walletStr);
    const wallet = walletArr.find((el) => el.isDefault === 1);
    if (wallet) {
      const walletDes = decryptByDES(wallet.wallet, sessionStorage.getItem("password"));
      if (walletDes) {
        walletObj = JSON.parse(walletDes);
      }
    }
  }
  return await SolanaTx(walletObj.address, address, walletObj.privateKey, amount);
  // if (currency === "BTC") {
  //   if (walletObj) {
  //     return await btcTx(walletObj.btcPrivateKey, address, amount);
  //   }
  // } else if (currency === "ETH") {
  //   if (walletObj) {
  //     return await ethTx(walletObj.ethPrivateKey, address, amount, walletObj.ethAddress);
  //   }
  // } else if (currency === "BNB") {
  //   if (walletObj) {
  //     return await bnbTx(walletObj.bnbPrivateKey, address, amount);
  //   }
  // } else if (currency === "TRX") {
  //   if (walletObj) {
  //     return await trxTx(walletObj.trxPrivateKey, address, amount, walletObj.trxAddress);
  //   }
  // }
}
