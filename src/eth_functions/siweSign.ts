export async function siweSign(siweResultElement: HTMLElement, siweMessage: any) {
  const provider = window.currentProvider;
  const accounts = window.currentAccounts;

  try {
    const from = accounts[0];

    const encoder = new TextEncoder();
    const encodedMessage = encoder.encode(siweMessage);
    console.log(encodedMessage)

    const msg = Array.from(encodedMessage)
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');

    console.log(msg)
    console.log(from)

    let params = [msg, from]
    console.log(params)

    const sign = await provider.request({
      method: "personal_sign",
      params,
    });

    siweResultElement.innerHTML = sign;
  } catch (err) {
    console.error(err);
    siweResultElement.innerHTML = `Error: ${err}`;
  }
}