import CTA from "@/components/common/CTA/CTA";
import InfoContents from "@/components/common/Infos/InfoContents";
import Security from "@/components/common/Security/Security";
import CCW from "@/components/common/ccw/CCW";
import Footer from "@/components/common/footer/Footer";
import BillervestCoin from "@/components/common/product/BillervestCoin";
import BillervestFamily from "@/components/common/product/BillervestFamily";
import TrustedWallet from "@/components/common/wallet/TrustedWallet";
import { subNav } from "@/constants/data";
import Tablet from "@/assets/images/tablet.png";



export default function Home() {
  return (
    <main>
      <CCW title="Crypto Currency Wallet" list={subNav} />
      <CTA
        title="BillerVest Wallet"
        list={list}
        paragraph=" Your best option to access the world of crypto"
        image={Tablet}
      />
      <Security />
      <InfoContents />
      <TrustedWallet />
      <BillervestFamily />
    </main>
  );
}


const list = [
  {
    content: "Store all your Crypto and NFTs here on BillerVest.",
  },
  {
    content:
      " Buy, exchange and stake crypto in a secured mobile and desktop app.",
  },
  {
    content: "40+ blockchains and thousands of tokens available. ",
  },
  {
    content: " Protect your digital assets with industry-leading security ",
  },
];