export interface WalletModel {
  btcAddress: string;
  ethAddress: string;
  bnbAddress: string;
  trxAddress: string;
  btcPrivateKey: string;
  ethPrivateKey: string;
  bnbPrivateKey: string;
  trxPrivateKey: string;
  password: string;
  mnemonic: string;
}
export interface LocalWalletModel {
  wallet: string;
  name: string;
  isDefault: number;
}
