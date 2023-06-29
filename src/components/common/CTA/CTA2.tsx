"use client";
import Tablet from "@/assets/images/tablet.png";
import Image from "next/image";

const CTA2 = () => {
  return (
    <section className="flex flex-col-reverse pb-[80px] md:pb-[40px] md:flex-row md:items-center gap-8 mt-[60px] resp-margin ">
      <div className="flex-1 flex flex-col items-center md:items-start  ">
        <h1 className="font-[500] text-center md:text-start text-[45px] md:text-[70px] md:leading-[82.03px] ">
          Increase
          <span className="block font-[300] ">your earnings</span>
        </h1>
        <p className="font-[400] text-center md:text-start max-w-[454px] text-blue-text text-[18px] md:text-[20px] leading-[23.44px] tracking-[-2%] mt-[20px] ">
          Using BillerVest Wallet for Staking BNB is the easiest and safest way
          to increase your funds. Do you know how much money you can earn right
          now, right here.
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center ">
        <Image src={Tablet} alt="tablet" priority />
      </div>
    </section>
  );
};
export default CTA2;
