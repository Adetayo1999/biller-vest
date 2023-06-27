'use client'
import CTA2 from "@/components/common/CTA/CTA2";
import BenefitContents from "@/components/common/benefit/BenefitContents";
import Benefits from "@/components/common/benefit/Benefits";
import CCW from "@/components/common/ccw/CCW";
import { stakingSubNav, subNav } from "@/constants/data";
import { useParams } from "next/navigation";

const Staking = () => {
  const params = useParams();

  return (
    <section>
      <CCW title={`Staking ${params.staking}`} list={stakingSubNav} fontWeight="font-[300]" reversedRow />
      <CTA2 />
      <Benefits />
      <BenefitContents />
      
    </section>
  );
};
export default Staking;
