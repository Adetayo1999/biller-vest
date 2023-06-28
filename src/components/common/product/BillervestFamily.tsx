"use client";
import BillerVest from "@/assets/images/BillerPay-large.png";
import Image from "next/image";

const BillervestFamily = () => {
  return (
    <section className="flex justify-center items-center mt-[120px] flex-col  ">
      <h4 className="font-normal text-[20px] md:text-[50px] mb-[80px] text-center ">
        BillerVest Product Family
      </h4>
      <div className="h-[500px] w-full md:w-[500px] rounded-[16px] bg-primary-main flex flex-col items-center justify-center  gap-[60px] ">
        <Image src={BillerVest} alt="logo" className=" " priority />

        <p className=" text-center max-w-[300px] font-[300] text-[20px] " >Integrate BillerPay for your crypto and online payments</p>
      </div>
    </section>
  );
};
export default BillervestFamily;
