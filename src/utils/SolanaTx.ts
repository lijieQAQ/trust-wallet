import {
  Keypair,
  Transaction,
  SystemProgram,
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} from "@solana/web3.js";
import { decode } from "bs58";
import BigNumber from "bignumber.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function SolanaTx(
  fromAddress: string,
  to: string,
  fromPrivateKey: string,
  amount: number | string
) {
  const tx = new Transaction();
  tx.add(
    SystemProgram.transfer({
      fromPubkey: new PublicKey(fromAddress),
      toPubkey: new PublicKey(to),
      lamports: new BigNumber(amount).times(LAMPORTS_PER_SOL).toNumber(),
    })
  );
  tx.feePayer = new PublicKey(fromAddress);
  const feePayer = Keypair.fromSecretKey(decode(fromPrivateKey));

  // a. recent blockhash
  tx.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;

  // b. 簽名
  tx.sign(...[feePayer]);

  // c. 序列化交易
  const rawTx = tx.serialize();

  // d步驟可以使用以下方法取代，上面是為了把完整步驟真實呈現
  // console.log(`txhash: ${await CONNECTION.sendRawTransaction(rawTx)}`);
  return await connection.sendRawTransaction(rawTx);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getBalance(fromAddress: string) {
  const balance = await connection.getBalance(new PublicKey(fromAddress));
  return new BigNumber(balance).div(LAMPORTS_PER_SOL).toFixed(2, 1);
}
