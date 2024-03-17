import Web3 from "web3";
export function testFun() {
  const ERC20_ABI = [
    /* 代币合约ABI */
  ];
  const INFURA_URL = "https://mainnet.infura.io/v3/YOUR_INFURA_KEY"; // 替换为你的Infura API密钥
  console.log("🚀 ~ testFun ~ INFURA_URL:", INFURA_URL)
  const ERC20_ADDRESS = "0xTokenContractAddress"; // 替换为代币合约地址

  const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_URL));
  const erc20Contract = new web3.eth.Contract(ERC20_ABI, ERC20_ADDRESS);

  // 用户的私钥或助记词
  const privateKey = "0xYOUR_PRIVATE_KEY"; // 替换为用户的私钥
  const wallet1 = web3.eth.accounts.privateKeyToAccount("0x" + privateKey);
  web3.eth.accounts.wallet.add(wallet1);

  // 获取代币余额
  erc20Contract.methods
    .balanceOf(wallet1.address)
    .call()
    .then((balance) => console.log("Your token balance:", balance));

  // 发送代币转账交易
  const toAddress = "0xReceiverAddress"; // 替换为接收者地址
  const amount = 100; // 转账数量
  erc20Contract.methods
    .transfer(toAddress, amount)
    .send({
      from: wallet1.address,
      gas: "21000", // 设置Gas限制
      gasPrice: "20000000000", // 设置Gas价格
    })
    .on("transactionHash", (hash) => console.log("Transaction hash:", hash))
    .on("receipt", (receipt) => console.log("Transaction receipt:", receipt))
    .on("confirmation", (confirmationNumber, receipt) =>
      console.log("Confirmation number:", confirmationNumber)
    )
    .on("error", (error) => console.error("Error:", error));
}
