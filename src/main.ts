import "./style.css"
import { listProviders } from "./eth_functions/providers.ts"
import { sendEthFunc } from "./eth_functions/sendEth.ts"
import { siweSign } from "./eth_functions/siweSign.ts";
const accounts = window.currentAccounts;

const providerButtonsElement = document.querySelector<HTMLDivElement>("#providerButtons")!;
const walletAddressElement = document.querySelector<HTMLDivElement>("#walletAddress")!;
listProviders(providerButtonsElement, walletAddressElement);

document.getElementById('sendEthButton')?.addEventListener('click', async () => {
  await sendEthFunc()
});

const siweButton = document.getElementById("siwe")
const siweResultElement = document.getElementById("siweResult")

siweButton?.addEventListener("click", async () => {
  if (siweResultElement) {
    const siweMessage = `127.0.0.1:3000 wants you to sign in with your Ethereum account:\n0x8FD83cb56Dfc45222a84c86E8798c1F5E64B8e23\n\nI accept the MetaMask Terms of Service: https://community.metamask.io/tos\n\nURI: http://127.0.0.1:3000/\nVersion: 1\nChain ID: 1\nNonce: 32891757\nIssued At: 2021-09-30T16:25:24.000Z`
    siweSign(siweResultElement, siweMessage)
  } else {
    console.error("siweResult element not found");
  }
});