"use client";

import { useParams } from "next/navigation";
import Info from "../Infos/Info";
import Phone from "@/assets/images/info1.png";
import Tablet from "@/assets/images/tablet.png";
import Info2 from "../Infos/Info2";

const BenefitContents = () => {
  const params = useParams();
  return (
    <section>
      <Info
        image={Phone}
        list={list1}
        btnTitle1={`Stake ${params.staking}`}
        title="Buy and sell crypto with credit card & bank account"
      />
      <Info2 image={Tablet}  textArr={textArr} />
    </section>
  );
};
export default BenefitContents;

const list1 = [
  {
    content: "Download BillerVest Wallet and deposit BNB to your balance ",
  },
  {
    content: "Go to the staking section and set the additional parameters",
  },
  {
    content: "Get your reward",
  },
];


const textArr = [
  {
    head: "What is the meaning of staking",
    paragraph:
      "Staking is a part of the Proof of Stake consensus algorithm. It is performed bydelegating a part of the assets you are holding to the said algorithm which is usuallydone through the “staking pool”. Such a process ensures the security and efficiency of a chosen network.",
  },
  {
    head: "How to make money by staking",
    paragraph:
      "Anyone with a specified minimum balance of a chosen crypto asset can validatetransactions and earn staking rewards. The assets you stake are utilized by theblockchain and percentage-rate rewards are generated with time. It is like earninginterest with a savings account.",
  },
];