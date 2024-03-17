import * as bip39 from "bip39";
import { hdkey } from "ethereumjs-wallet";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function initWallet(mnemonic) {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  let hdWallet = hdkey.fromMasterSeed(seed);

  const ethKey = hdWallet.derivePath("m/44'/60'/0'/0/0");
  console.log({
    privateKey: ethKey.getWallet().getPrivateKeyString(),
    address: ethKey.getWallet().getAddressString(),
    mnemonic: mnemonic,
  })
  return {
    privateKey: ethKey.getWallet().getPrivateKeyString(),
    address: ethKey.getWallet().getAddressString(),
    mnemonic: mnemonic,
  };
}
