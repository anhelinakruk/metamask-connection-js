import { estimateGas } from "./estimateGas";

export async function sendEthFunc() {
  const provider = window.currentProvider;
  const accounts = window.currentAccounts;
  
  if (!provider || !accounts) {
    console.error("Provider or accounts not found");
    return;
  }

  try {
    const gas = await estimateGas();
    console.log("Estimated Gas:", gas);
  
    const transactionParams = {
      from: accounts[0],
      to: "0x7d741E81B20E5F3e73E4F3efa93bd3ebd6Bc696A",
      value: "0x00",
      data: "0xd09de08a",
      gas,
    };
  
    const requestObject = {
      method: "eth_sendTransaction",
      params: [transactionParams],
    };
  
    console.log("Request Object:", requestObject);
  
    const sendTransaction = await provider.request(requestObject);
    console.log("Transaction Hash:", sendTransaction);
  } catch (err) {
    console.error("Error sending transaction", err);
  }
}