"use client";
import Atomic from "@/assets/images/logos/atomic.png";
import Binance from "@/assets/images/logos/binance.png";
import Cake from "@/assets/images/logos/cake.png";
import Edge from "@/assets/images/logos/edge.png";
import Exodus from "@/assets/images/logos/exodus.png";
import Guarda from "@/assets/images/logos/guarda.png";
import Huobi from "@/assets/images/logos/huobi.png";
import Ledger from "@/assets/images/logos/ledger.png";
import Okex from "@/assets/images/logos/okex.png";
import Simplex from "@/assets/images/logos/simplex.png";
import Trezor from "@/assets/images/logos/trezor.png";
import Trustee from "@/assets/images/logos/trustee.png";
import Image from "next/image";
import PrivacyAndSec from "./atoms/PrivacyAndSec";

const Security = () => {
  return (
    <section className="bg-primary-main mt-[90px] resp-padding ">
      <div className="logos">
        {logoImages.map((item, index) => (
          <Image src={item.img} alt="img" id={`${index}`} />
        ))}
      </div>
      <PrivacyAndSec />
    </section>
  );
};
export default Security;

const logoImages = [
  {
    img: Atomic,
  },
  {
    img: Binance,
  },
  {
    img: Cake,
  },
  {
    img: Edge,
  },
  {
    img: Exodus,
  },
  {
    img: Guarda,
  },
  {
    img: Huobi,
  },
  {
    img: Ledger,
  },
  {
    img: Okex,
  },
  {
    img: Simplex,
  },
  {
    img: Trezor,
  },
  {
    img: Trustee,
  },
];
