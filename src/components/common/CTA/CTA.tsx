"use client";

import Dot from "@/assets/images/dot.png";
import Tablet from "@/assets/images/tablet.png";
import Button from "@/components/form/Button";
import AppleIcon from "@/components/icons/AppleIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="resp-margin mt-[55px] flex justify-between items-center ">
      <div className="">
        <h1 className=" font-normal text-[70px] ">BillerVest Wallet</h1>
        <p className="font-normal text-[26px] ">
          Your best option to access the world of crypto
        </p>
        <div className="mt-[20px] flex flex-col gap-4  ">
          {list.map((item, index) => (
            <div className="flex gap-1 items-center " id={`${index}`}>
              <div className="h-[15px] w-[15px] ">
                <Image src={Dot} alt="dot" height={15} width={15} />
              </div>
              <p className="text-blue-text font-normal text-[20px] ">
                {item.content}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-5 ">
          <Button
            icon={<AppleIcon />}
            textStyle="font-work text-[14px]"
            btnText="Get on iPhone"
            paddingInline="px-[14px]"
            bgColor="bg-[#1A1A1A]"
            height="h-[52px]"
          />
          <Button
            icon={<GoogleIcon />}
            textStyle="font-work text-[14px] text-[#090909] "
            btnText="Get on Android"
            paddingInline="px-[14px]"
            bgColor="bg-white"
            height="h-[52px]"
          />
        </div>
      </div>
      <div className="relative">
        <Image src={Tablet} alt="tablet"  priority />
      </div>
    </section>
  );
};
export default CTA;

const list = [
  {
    content: "Store all your Crypto and NFTs here on BillerVest.",
  },
  {
    content:
      " Buy, exchange and stake crypto in a secured mobile and desktop app.",
  },
  {
    content: "40+ blockchains and thousands of tokens available. ",
  },
  {
    content: " Protect your digital assets with industry-leading security ",
  },
];
