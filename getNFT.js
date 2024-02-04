// Function to fetch image URL from the API
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
async function fetchImage() {
  try {
    const response = await fetch(
      "https://api.inz-dev.esollabs.com/v1/nft-mkp/marketplace/profile_nft?address=4t5r6AavtsS3Yh87Rv2nLik5nJCMRARhoUCjUY9nABZv"
    );
    const data = await response.json();
    console.log(data)
    return data; // Assuming your API response has a property 'imageUrl' containing the image URL
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
}
// [0].nft_list[0].image_url
// Function to create and append a div with an image to the container

// Call the function to append the image on page load
async function appendImage() {
  const container = document.getElementById("nft-container");
  // const newNFT_container = document.createElement("div");
  const imageUrls = await fetchImage();
  const handleChange = (url) => {
    const character = document.getElementsByClassName("character");

    if (character[0].children.length > 0) {
      console.log("The div has child elements.");
      console.log("Child: ", character[0].children[0]);
      character[0].removeChild(character[0].children[0]);
    }
    const newNFT = document.createElement("img");
    // newNFT_container.className = "character";
    newNFT.src = url;
    newNFT.className = "w-[16px] h-[16px] rounded-[4px]";
    // newNFT_container.appendChild(newNFT);
    // newNFT_container.className = "w-[20px] h-[20px]";
    // console.log(url);
    character[0].appendChild(newNFT);
    // setInterval(() => {
    //   character[0].appendChild(newNFT);
    // }, 500);
    const result_win = document.getElementById("endLevelDialog");
    const result_lose = document.getElementById("gameOverDialog");
    result_win.addEventListener("click", () => {
      console.log("Win"),
        setTimeout(() => {
          if (character[0].children.length > 0) {
            console.log("The div has child elements.");
            console.log("Child: ", character[0].children[0]);
            character[0].removeChild(character[0].children[0]);
          }
          character[0].appendChild(newNFT);
        }, 100);
    });
    result_lose.addEventListener("click", () => {
      console.log("Lose"),
        setTimeout(() => {
          if (character[0].children.length > 0) {
            console.log("The div has child elements.");
            console.log("Child: ", character[0].children[0]);
            character[0].removeChild(character[0].children[0]);
          }
          character[0].appendChild(newNFT);
        }, 100);
    });
  };
  if (imageUrls.length > 0) {
    imageUrls.map((imageUrl, index) => {
      const imageDiv = document.createElement("div");
      const imageElement = document.createElement("img");
      const NFT_name = document.createElement("p");
      const NFT_Owner = document.createElement("p");
      const NFT_Owner_avatar = document.createElement("img");
      const NFT_Owner_div = document.createElement("div");
      const Select_btn = document.createElement("button");
      // Set the image source
      imageElement.src = imageUrl.image_url;
      imageElement.className = "w-[208px] h-[214px] shrink-0 rounded-lg";

      NFT_Owner_div.className = "flex flex-row-reverse item-center gap-[8px]";
      NFT_Owner_div.innerHTML = walletFormatAddress(
        imageUrl.owner,
        12
      );

      NFT_Owner_avatar.src = imageUrl.owner_image_url;
      NFT_Owner_avatar.className = "rounded-full w-[28px] h-[28px]";

      Select_btn.setAttribute("id", "Select_btn");
      Select_btn.setAttribute("url", imageUrl.image_url);
      Select_btn.className =
        "bg-[#E665B0] rounded-[0px_0px_16px_16px] text-[#FFF] text-[20px] font-[500] absolute bottom-0 right-0 left-0 h-[47px] ";
      Select_btn.innerHTML = "Select";
      Select_btn.addEventListener("click", () =>
        handleChange(imageUrl.image_url)
      );

      NFT_Owner.innerHTML = walletFormatAddress(
        imageUrl.owner,
        12
      );

      NFT_name.innerHTML = imageUrl.name;
      NFT_name.className = "text-[16px] font-[600] leading-[24px] text-start ";

      // Append the image element to the div
      imageDiv.id = "nft_card";
      imageDiv.className =
        "flex flex-col items-start justify-start gap-[16px] rounded-2xl w-[257px] h-[402px] p-[24px] bg-[#FFBC39] shrink-0 relative overflow-hidden";

      NFT_Owner_div.appendChild(NFT_Owner_avatar);
      // NFT_Owner_div.appendChild(NFT_Owner);

      imageDiv.appendChild(imageElement);
      imageDiv.appendChild(NFT_name);
      // imageDiv.appendChild(NFT_Owner);
      imageDiv.appendChild(NFT_Owner_div);
      imageDiv.appendChild(Select_btn);

      // Append the div to the container
      container.appendChild(imageDiv);
    });
  }
}
appendImage();
