"use client";

import CTA from "@/components/common/CTA/CTA";
import CCW from "@/components/common/ccw/CCW";
import { walletSubNav } from "@/constants/data";
import { useParams } from "next/navigation";
import bannerImage from "@/assets/images/vest-image.png";

import HowItWorks from "@/components/common/nft/HowItWorks";
import WalletInfo from "@/components/common/wallet/WalletInfo";

const Wallet = () => {
  const params = useParams();
  return (
    <section>
      <CCW
        title={`${params.coin.replaceAll("%20", " ")} Wallet`}
        list={walletSubNav}
        fontWeight="font-[300] capitalize "
      />
      <CTA
        title="Manage and Save your"
        titleStyle="text-[50px] font-[300px] mt-[15px] "
        coinNameStyle="font-[400] text-[50px] md:text-[55px] "
        sectionMargin="mt-[-40px]"
        coinName={`${params.coin.replaceAll("%20", "")}`}
        image={bannerImage}
        paragraph="With BillerVest Wallet"
      />
      <HowItWorks
        title={`How ${params.coin.replaceAll("%20", "")} Works on BillerVest`}
        btnColor="bg-[#048FF9]"
      />
      <WalletInfo />
    </section>
  );
};
export default Wallet;
