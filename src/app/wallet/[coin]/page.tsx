"use client";

import CTA from "@/components/common/CTA/CTA";
import CCW from "@/components/common/ccw/CCW";
import { walletSubNav } from "@/constants/data";
import { useParams } from "next/navigation";
import Devices from "@/assets/images/wallet-img.png";

import HowItWorks from "@/components/common/nft/HowItWorks";

const Wallet = () => {
  const params = useParams();
  return (
    <section>
      <CCW
        title={`${params.coin} Wallet`}
        list={walletSubNav}
        fontWeight="font-[300] capitalize "
      />
      <CTA
        title="Manage and Save your"
        titleStyle="text-[50px] font-[300px] mt-[15px] "
        coinNameStyle="font-[400] text-[55px] "
        sectionMargin="mt-[-40px]"
        coinName={`${params.coin}`}
        image={Devices}
        paragraph="With BillerVest Wallet"
      />
      <HowItWorks
        title={`How ${params.coin} Works on BillerVest`}
        btnColor="bg-[#048FF9]"
      />
    </section>
  );
};
export default Wallet;