"use client";
import Coin from "@/assets/images/gold-bitcoin.png";
import Key from "@/assets/images/padlock-with-key.png";
import Image from "next/image";

const PrivacyAndSec = () => {
  return (
    <div className="mt-[75px] mx-4 py-16 px-8 flex flex-col md:flex-row items-center justify-between bg-main rounded-[20px] gap-8  ">
      <div className="">
        <Image
          src={Key}
          alt="secure"
          className="w-[150px] h-[170px] md:h-[200px] md:w-[200px] "
          priority
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-6 md:gap-9 text-center w-full">
        <h2 className="font-normal text-[25px] md:text-[40px] max-w-[670px] ">
          Manage your money with exceptional privacy & security
        </h2>
        <p className="text-[18px] md:text-[20px] font-normal text-blue-text  ">
          The BillerVest Wallet is non-custodial: we are not in possession of
          any personal data. Your funds are stored and safe on your device, We
          guarantee ultimate privacy and security of your Money.
        </p>
      </div>
      <div className="">
        <Image
          src={Coin}
          alt="coin"
          className="w-[150px] h-[170px] md:h-[200px] md:w-[170px] "
          priority
        />
      </div>
    </div>
  );
};
export default PrivacyAndSec;
