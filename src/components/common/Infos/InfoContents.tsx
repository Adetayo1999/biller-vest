"use client";

import Info from "./Info";
import Phone from "@/assets/images/info1.png";
import Phone2 from "@/assets/images/info2.png";
import Phone3 from "@/assets/images/info3.png";
import Phone4 from "@/assets/images/info4.png";
import Phone5 from "@/assets/images/info5.png";
import Tablet from "@/assets/images/nft-tablet.png";

const InfoContents = () => {
  return (
    <section>
      <Info
        image={Phone}
        list={list1}
        btnColor2="bg-[#1A1A1A]"
        btnTitle2="Try BillerVest"
        title="Buy and sell crypto with credit card & bank account"
      />
      <Info
        image={Phone2}
        paragraph="Biller Vest Wallet is your passport to the decentralised finance web. Harness the power of DeFi to earn yield, grow your NFT collection, and much more."
        btnColor2="bg-[#1A1A1A]"
        btnTitle2="Try on this site"
        reversedRow
        title="Explore our decentralised finance platform with confidence "
        bgColor="bg-primary-main"
      />
      <Info
        image={Phone3}
        paragraph="BillerVest Wallet supports storage and instant exchanges of 40+ coins, including BTC, ETH, DOGE, XMR and others. Thousands of popular tokens are also available in BillerVest Wallet. Any tokens on EVM-compatible blockchains can be stored and manually added, even if not listed natively."
        btnTitle2="Show All Wallets"
        btnColor2="bg-[#1A1A1A]"
        title="40+ coins and any tokens on 7 networks "
      />
      <Info
        image={Phone4}
        list={list2}
        btnColor2="bg-[#1A1A1A]"
        btnTitle2="Try on this site"
        reversedRow
        isFullStop
        title="Making the complex more simple"
        bgColor="bg-primary-main"
      />
      <Info
        image={Tablet}
        title="Wider and even more secured 👩‍💻"
        btnTitle1="Download Wallet"
        paragraph="Full-featured multicurrency wallet on your laptop. Much more useful working space and no room for mistakes. Full and secured sync with a mobile app."
        bgColor="bg-primary-main"
      />
      <Info
        image={Phone5}
        paragraph="WalletConnect integration connects NOW Wallet to any dApp on Ethereum, BSC, Polygon, AVAX C-chain, Optimism, Fantom and Algorand simply by scanning a QR-code."
        btnTitle1="Access WEB 3.0"
        reversedRow
        title="Connect to dApps"
        bgColor="bg-primary-main"
      />
    </section>
  );
};
export default InfoContents;

const list1 = [
  {
    content:
      "Billervest allows Users to buy/sell crypto using bank accounts and Visa/Master card",
  },
  {
    content: "This feature also applies to Billervest wallet",
  },
  {
    content: "Buying cryptocurrency with fiat money is just a click away ",
  },
];


const list2 = [
  {
    content: "Instant crypto-to-crypto and fiat-to-crypto exchanges.",
  },
  {
    content: "Advanced settings including account nonce for ETH transaction.",
  },
  {
    content: "Our support team at your service. ",
  },
];



