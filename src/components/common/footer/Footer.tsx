"use client";

import { billervest, stakingList, supportList, walletList } from "@/constants/data";
import { FooterListI } from "@/types";
import Image from "next/image";
import List from "./List";

const Footer = () => {
  return (
    <footer className=" bg-primary-main resp-padding ">
      <div className="flex justify-between items-start">
        <List title="Wallets" arr={walletList} />
        <List title="Staking" arr={stakingList} listGap="gap-[16px]" />
        <List title="Support" arr={supportList} />
        <List title="BillerVest Products Family" arr={billervest} />
        <div className="">
          <h5 className="font-work text-[24px] font-bold text-[#959595] tracking-[-2%] leading-[28.15px] ">
            Newsletter
          </h5>
          <input className="border-[1px] border-[#fff] w-[350px] bg-[transparent] rounded-[10px] h-[50px] " placeholder="Your Email" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
