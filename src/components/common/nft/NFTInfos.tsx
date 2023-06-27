"use client";

import Info from "../Infos/Info";
import NFT1 from "@/assets/images/nft1.png";
import NFT2 from "@/assets/images/nft2.png";
import NFT3 from "@/assets/images/nft3.png";
import Tablet from "@/assets/images/nft-tablet.png";

const NFTInfos = () => {
  return (
    <section>
      <Info
        image={NFT1}
        title="Create NFT"
        list={list1}
        listGap="gap-[3px]"
        btnTitle1="Create NFT"
        paragraph="
BillerVest Wallet supports NFTs on Ethereum (ERC-721 and ERC-1155 standards) and Solana. NFTs on Binance network will also be added soon "
      />
      <Info
        image={NFT2}
        title="Send and receive NFT"
        list={list2}
        reversedRow
        listGap="gap-[3px]"
        bgColor="bg-primary-main"
        btnTitle1="Try BillerVest"
        paragraph="BillerVest Wallet supports NFTs on Ethereum (ERC-721 and ERC-1155 standards) and Solana. NFTs on Binance network will also be added soon"
      />
      <Info
        image={NFT3}
        title="Store your NFT"
        reversedRow
        paragraphWidth="max-w-[500px]"
        btnTitle1="Start Storing"
        paragraph="Your NFT are safe with us, so you can store up your NFT on BillerVest anytime, Anyday"
      />
      <Info
        image={Tablet}
        title="Buy/Sell NFT"
        btnTitle1="Get Wallet"
        paragraph="Get wallet now to start trading"
        list={list3}
        bgColor="bg-primary-main"
        contentGap="gap-[100px] "
      />
    </section>
  );
};
export default NFTInfos;

const list1 = [
  {
    content: "You can send your NFTs to any user in two simple clicks ",
  },
  {
    content: "You can also easily receive NFTs right into your wallet. ",
  },
];

const list2 = [
  {
    content: "You can send your NFTs to any user in two simple clicks ",
  },

  {
    content: "You can also easily receive NFTs right into your wallet.",
  },
];


const list3 = [
  {
    content: "Buying and selling of NFT is available on BillerVest without stress.",
  },

 
];




