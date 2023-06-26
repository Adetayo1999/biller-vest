"use client";
import Coin from "@/assets/images/BillerVest-coin.png";
import AppleIcon from "@/components/icons/AppleIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import Image from "next/image";

const BillervestCoin = () => {
  return (
    <section className="my-[300px] resp-margin flex flex-col items-center justify-center gap-[40px] ">
      <div className="flex gap-[70px] items-center justify-center w-full ">
        <div className="border-t-[#FFFFFF26] border-t-[1px] w-full "></div>
        <Image src={Coin} alt="coin" />
        <div className="border-t-[#FFFFFF26] border-t-[1px] w-full "></div>
      </div>

      <p className="text-[#D4D4D4] font-normal text-[20px] text-center max-w-[700px]  ">
        Get the BillerVest Wallet and enjoy its simplicity, privacy and the
        community built around it. An excellent way to manage your crypto, just
        a click away
      </p>
      <div className=" flex items-center gap-4 ">
        <div className="bg-primary-main h-[58px] w-[58px] rounded-[5px] flex items-center justify-center  ">
          <AppleIcon />
        </div>

        <div className="bg-primary-main h-[58px] w-[58px] rounded-[5px] flex items-center justify-center  ">
          <GoogleIcon />
        </div>
      </div>
    </section>
  );
};
export default BillervestCoin;
