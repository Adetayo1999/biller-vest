"use client";

import { useParams } from "next/navigation";
import Info from "../Infos/Info";
import Phone1 from "@/assets/images/info1.png";
import Phone2 from "@/assets/images/info2.png";
import Tablet from "@/assets/images/tablet.png";
import Tablet2 from "@/assets/images/nft-tablet.png";
import Info2 from "../Infos/Info2";

const WalletInfo = () => {
  const { coin } = useParams();

  return (
    <section>
      <Info
        image={Phone1}
        title={`How to buy BTC `}
        list={list1}
        paragraph={`You can buy BTC with a debit/credit card on BillerVest: `}
        reverseCol
        listGap="gap-[5px] "
      />

      <Info
        image={Phone2}
        title={`Exchange your BTC`}
        list={list2}
        paragraph={`You can exchange BTC  instantly in BillerVest Wallet:`}
        reverseCol
        reversedRow
        listGap="gap-[5px] "
        bgColor="bg-primary-main"
      />
      <Info
        image={Tablet}
        title={`Bitcoin Price chart`}
        paragraph={`Bitcoin Price for today is $ 27 920.87. Its current circulating supply is BTC 539 983 810 036.43 with a market cap of $ 539 983 810 036.43.`}
        showBtns={false}
        reversedRow
        paragraphWidth="max-w-[500px]"
      />
      <Info2 textArr={textArr} image={Tablet2} reversedRow />
    </section>
  );
};
export default WalletInfo;

const list1 = [
  {
    content: "Pick BTC as the currency you want to buy",
  },
  {
    content: "Choose a fiat currency to buy BTC with ",
  },
  {
    content:
      "Enter your card details and the recipient's address if you are sending to a third-party wallet",
  },
  {
    content: "Receive your BTC ",
  },
];

const list2 = [
  {
    content: "Pick BTC as the currency you want to exchange.",
  },
  {
    content: "Choose the crypto asset you’d like to get for your BTC. ",
  },
  {
    content:
      "Enter the recipient's address if you are exchanging to a third-party wallet.",
  },
  {
    content: "Receive your exchanged assets  ",
  },
];

const textArr = [
  {
    head: "",
    paragraph:
      "Bitcoin (or BTC) is the world’s first decentralized digital currency based on the form of distributed ledger technology – a blockchain. It uses a peer-to-peer internet network to confirm transactions directly between users and operates free of any central control. All the information is stored in an immutable ledger and can be accessed by anyone. It makes the whole system transparent, as anyone can check the transaction history and track assets. At the same time, records do not contain any personal information, therefore there is no risk that the holders’ information may be stolen.",
  },
  {
    head: "History of Bitcoin",
    paragraph:
      "Bitcoin was invented by somebody known as Satoshi Nakamoto which is a pseudonym for an anonymous programmer or a group of them. On October 31, 2008, Satoshi Nakamoto published the Bitcoin whitepaper on a cryptography mailing list. Despite there used to be other attempts to create a digital currency, this event is generally considered to be the beginning of the entire blockchain and cryptocurrency world.",
  },
  {
    head: "Is Bitcoin safe?",
    paragraph: `Cryptocurrency is an incredibly volatile investment, therefore buying BTC or any other crypto always entails risk. Though, if you decide to buy it, you will need a safe and secure place to store it. Unfortunately, phishing attacks and exchange hacks are not uncommon in the crypto world. NOW Wallet is a non-custodial crypto wallet that does not collect any data, which makes it perfect for keeping your crypto assets right on your mobile device.`,
  },
];







