export async function estimateGas() {
  const provider = window.currentProvider;
  const accounts = window.currentAccounts;

  if (!provider || !accounts) {
    console.error("Provider or accounts not found");
    return;
  }

  try {
    const gas = await provider.request({ 
      method: "eth_estimateGas",
      params: [
        {
          from: accounts[0],
          to: "0x7d741E81B20E5F3e73E4F3efa93bd3ebd6Bc696A",
          data: "0xd09de08a",
        }
      ],
    });
    console.log(gas)
    return gas
  } catch (err) {
    console.error("Error estimating gas", err);
  }
}