import { ethers } from "ethers";

export function testFun() {
  // 创建一个新的随机钱包
  const walletMnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
  console.log("Mnemonic:", walletMnemonic);

  const wallet = ethers.Wallet.fromMnemonic(walletMnemonic);
  console.log("Wallet Address:", wallet.address);

  // 假设我们有一个ERC20代币合约地址和ABI
  const tokenContractAddress = "0xYourTokenContractAddress";
  console.log("🚀 ~ tokenContractAddress:", tokenContractAddress);
  const tokenAbi = [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
    },
  ]; // 省略了具体的ABI

  // 提供provider（例如Infura）和代币合约地址
  const provider = new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"
  );
  console.log("🚀 ~ provider:", provider);

  const tokenContract = new ethers.Contract(
    tokenContractAddress,
    tokenAbi,
    provider
  );

  // 使用钱包地址获取代币余额
  const walletAddress = wallet.address;
  console.log("🚀 ~ walletAddress:", walletAddress);

  tokenContract
    .balanceOf(walletAddress)
    .then((balance) => console.log("Token balance:", balance.toString()));
}
