"use client";
import Wallet from "@/assets/images/3dwallet.png";
import Convert from "@/assets/images/convert.png";
import Safe from "@/assets/images/safe.png";
import Graph from "@/assets/images/staking-limit.png";
import Image from "next/image";

const Benefits = () => {
  return (
    <section className="bg-primary-main resp-padding flex flex-col items-center justify-center ">
      <h2 className="text-[50px] font-[400] ">Benefits</h2>
      <div className="grid grid-cols-2 gap-8 mt-[60px] ">
        {benefitsList.map((item) => (
          <div className=" h-[550px] w-full bg-[#230251] rounded-[20px] p-[34px] flex flex-col items-center  ">
            <h3 className="font-[400] text-[40px] " >{item.title}</h3>
            <div className="h-[500px] w-[500px] flex items-center justify-center ">
              <Image src={item.image} alt="img" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Benefits;

const benefitsList = [
  {
    title: "All crypto and NFT in one place",
    image: Wallet,
  },
  {
    title: "Control over your funds",
    image: Convert,
  },
  {
    title: "Earn more, Pay nothing",
    image: Safe,
  },
  {
    title: "Limitless funds",
    image: Graph,
  },
];
