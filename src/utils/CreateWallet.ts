import * as bip39 from "bip39";
import * as ed25519 from "ed25519-hd-key";
import * as bs58 from "bs58";
import * as tweetnacl from "tweetnacl";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function initWallet(mnemonic: string) {
  const derivePath = "m/44'/501'/0'/0'";
  if (bip39.validateMnemonic(mnemonic)) {
    // 先根据助记词获取seed
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const derivedSeed = ed25519.derivePath(
      derivePath,
      seed.toString("hex")
    ).key;
    // 得到私钥和地址
    return {
      privateKey: bs58.encode(
        tweetnacl.sign.keyPair.fromSeed(derivedSeed).secretKey
      ),
      address: bs58.encode(
        tweetnacl.sign.keyPair.fromSeed(derivedSeed).publicKey
      ),
      mnemonic: mnemonic,
    };
  } else {
    return {
      error: "Mnemonic Error",
    }
  }
}
