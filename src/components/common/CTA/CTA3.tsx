"use client";
import Splash from "@/assets/images/splash.png";
import Vector from "@/assets/images/Vector1.png";
import Button from "@/components/form/Button";
import CryptoConverter from "@/components/modal/CryptoConverter";
import Image from "next/image";

const CTA3 = () => {
  return (
    <section className="resp-margin flex flex-col-reverse md:flex-row items-center gap-8 mb-[40px] md:mb-0 ">
      <div className="flex-1 flex flex-col items-center md:items-start ">
        <h1 className="font-[400] text-[30px] md:text-[60px] ">
          Create, Connect, Collect
        </h1>
        <p className="text-blue-text font-[400] text-[26px] mt-3  ">
          With BillerVest Wallet
        </p>
        <div className="mt-[20px] ">
          <CryptoConverter
            triggerChild={
              <Button
                btnText="Get Wallet"
                textStyle="font-[600] text-[14px] font-work "
              />
            }
          />
        </div>
      </div>
      <div className="flex-1 relative ">
        <Image src={Splash} alt="img" />
        <Image
          src={Vector}
          alt="img"
          className="absolute bottom-[2rem] md:bottom-[5.5rem] right-[5rem] md:right-[14.56rem] "
        />
      </div>
    </section>
  );
};
export default CTA3;
