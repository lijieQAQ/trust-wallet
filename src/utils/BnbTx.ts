import { BncClient } from "@binance-chain/javascript-sdk";
import axios from "axios";

export async function bnbTx(privateKey, address, amount) {
  const asset = "BNB"; // asset string
  const addressTo = address; // addressTo string
  const message = ""; // memo string
  const api = "https://dex.binance.org/"; /// api string
  const bnbClient = new BncClient(api);
  const httpClient = axios.create({ baseURL: api });
  bnbClient.chooseNetwork("mainnet"); // or this can be "testnet"
  bnbClient.setPrivateKey(privateKey);
  bnbClient.initChain();
  try {
    const addressFrom = bnbClient.getClientKeyAddress(); // sender address string (e.g. bnb1...) ***
    const sequenceURL = `${api}api/v1/account/${addressFrom}`;
    const res = await httpClient.get(sequenceURL);
    const sequence = res.data.sequence || 0;
    const result = await bnbClient.transfer(
      addressFrom,
      addressTo,
      amount,
      asset,
      message,
      sequence
    );
    if (result.status === 200) {
      return result.result[0].hash;
    } else {
      return result;
    }
  } catch (e) {
    return e.message;
  }
}
