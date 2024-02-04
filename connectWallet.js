// const walletFormatAddress = (address, maxLength) => {
//   // Check if the address is valid and not empty
//   if (!address || typeof address !== "string" || address.length === 0) {
//     return "Invalid address";
//   }
//   // Ensure the address is not too short
//   if (address.length <= maxLength) {
//     return address;
//   }

//   // Split the address into parts for formatting
//   const prefix = address.slice(0, 6);
//   const suffix = address.slice(-4);

//   // Determine the length of the middle part
//   const middleLength = maxLength - prefix.length - suffix.length;

//   // If there's not enough space for the middle part, return the truncated address
//   if (middleLength <= 0) {
//     return address.slice(0, maxLength);
//   }

//   // Generate the middle part with ellipsis
//   const middle = "...";

//   // Combine the parts and return the formatted address
//   return `${prefix}${middle}${suffix}`;
// };

// async function connectToMetamask() {
//   try {
//     // Check if Metamask is installed
//     if (typeof window.ethereum !== "undefined") {
//       // Request account access
//       const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       });
//       const userAccount = walletFormatAddress(accounts[0], 12);

//       // Update the button label with the wallet address
//       const button = document.getElementById("connect-metamask");
//       button.textContent = `${userAccount}`;
//       const p_address = document.getElementById("walletAddress");
//       p_address.innerHTML = `Welcome: ${userAccount}`;
//       const buttonPlay = document.getElementById("PlayGame_sound");
//       buttonPlay.style.display = "block";
//       console.log("Connected to Metamask!");
//       console.log("User Account:", userAccount);

//       // You can use the user's account for further interactions with Ethereum
//       // Your logic goes here...
//     } else {
//       console.error("Metamask is not installed");
//     }
//   } catch (error) {
//     console.error("Error connecting to Metamask:", error);
//   }
// }
// function checkChracter() {
//   console.log("Clicked!!");
//   const elements = document.querySelectorAll(".character");

//   // Loop through each element and change its style
//   elements.forEach((element) => {
//     // Example: Add a class to set width to 100px
//     console.log(element);

//     // You can modify other styles as well, e.g., backgroundColor, fontSize, etc.
//     // element.style.backgroundColor = "yellow";
//     // element.style.fontSize = "20px";
//   });
//   elements[0].classList.add("main-character");
//   // elements[0].classList.add("bg-none");
// }
// // Event listener for the button click
// document
//   .getElementById("connect-metamask")
//   .addEventListener("click", connectToMetamask);

// // Function to open the modal
// function openModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "block";
// }

// // Function to close the modal
// function closeModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }

// document.getElementById("marketplace").addEventListener("click", openModal);
// document
//   .getElementById("change-character")
//   .addEventListener("click", openModal);

// //HandleAPI
