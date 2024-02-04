const getProvider = () => {
  if ("phantom" in window) {
    const provider = window.phantom?.solana;

    if (provider?.isPhantom) {
      return provider;
    }
  }

  window.open("https://phantom.app/", "_blank");
};
const walletFormatAddress = (address, maxLength) => {
  // Check if the address is valid and not empty
  if (!address || typeof address !== "string" || address.length === 0) {
    return "Invalid address";
  }
  // Ensure the address is not too short
  if (address.length <= maxLength) {
    return address;
  }

  // Split the address into parts for formatting
  const prefix = address.slice(0, 6);
  const suffix = address.slice(-4);

  // Determine the length of the middle part
  const middleLength = maxLength - prefix.length - suffix.length;

  // If there's not enough space for the middle part, return the truncated address
  if (middleLength <= 0) {
    return address.slice(0, maxLength);
  }

  // Generate the middle part with ellipsis
  const middle = "...";

  // Combine the parts and return the formatted address
  return `${prefix}${middle}${suffix}`;
};
const connectPhantom = async () => {
  const provider = getProvider(); // see "Detecting the Provider"
  try {
    const resp = await provider.connect();
    console.log(walletFormatAddress(resp.publicKey.toString()), 12);
    const userAccount = walletFormatAddress(resp.publicKey.toString(), 12);
    const button = document.getElementById("connect-phantom");
    button.textContent = `${userAccount}`;
    const p_address = document.getElementById("walletAddress");
    p_address.innerHTML = `Welcome: ${userAccount}`;
    const buttonPlay = document.getElementById("PlayGame_sound");
      buttonPlay.style.display = "block";
    // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
  } catch (err) {
    // { code: 4001, message: 'User rejected the request.' }
  }
  provider.on("connect", () => console.log("connected!"));
};

document
  .getElementById("connect-phantom")
  .addEventListener("click", connectPhantom);
