import CTA from "@/components/common/CTA/CTA";
import InfoContents from "@/components/common/Infos/InfoContents";
import Security from "@/components/common/Security/Security";
import CCW from "@/components/common/ccw/CCW";
import Footer from "@/components/common/footer/Footer";
import BillervestCoin from "@/components/common/product/BillervestCoin";
import BillervestFamily from "@/components/common/product/BillervestFamily";
import TrustedWallet from "@/components/common/wallet/TrustedWallet";
import { subNav } from "@/constants/data";



export default function Home() {
  return (
    <main>
      <CCW title="Crypto Currency Wallet" list={subNav} />
      <CTA />
      <Security />
      <InfoContents />
      <TrustedWallet />
      <BillervestFamily />
      <BillervestCoin />
      <Footer />
    </main>
  );
}
