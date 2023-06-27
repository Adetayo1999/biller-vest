"use client";

import CTA3 from "@/components/common/CTA/CTA3";
import CCW from "@/components/common/ccw/CCW";
import HowItWorks from "@/components/common/nft/HowItWorks";

import NFTInfos from "@/components/common/nft/NFTInfos";
import NFTValue from "@/components/common/nft/NFTValue";
import { nftSubNav } from "@/constants/data";

const NFTPage = () => {
  return (
    <section>
      <CCW title="NFT" list={nftSubNav} />
      <CTA3 />
      <HowItWorks />
      <NFTInfos />
      <NFTValue />
    </section>
  );
};
export default NFTPage;
