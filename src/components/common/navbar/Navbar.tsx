"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Logo from "@/assets/images/BillerVest.png";
import Button from "@/components/form/Button";
import ArrowDown from "@/components/icons/ArrowDown";
import Image from "next/image";

// images
import BNB from "@/assets/images/bnb.png";
import Biller from "@/assets/images/BillerPay.png";
import Atom from "@/assets/images/atom.png";
import TRX from "@/assets/images/trx.png";
import SOL from "@/assets/images/sol.png";
import ADA from "@/assets/images/ada.png";
import XTZ from "@/assets/images/xtz.png";
import BTC from "@/assets/images/gold-bitcoin.png";
import Tether from "@/assets/images/coins/tether.png";
import USD from "@/assets/images/coins/usd.png";
import Eth from "@/assets/images/coins/eth.png";
import Wallet from "@/assets/images/coins/wallet.png";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="resp-margin py-[25px] flex justify-between items-center border-1px">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" priority height={200} width={150} />
      </Link>

      {/* <div className="flex gap-8 items-center ">
        <div className="flex gap-10 lg:gap-16 items-center">
          {navLinks.map((item) => (
            <button className="flex gap-4 items-center">
              <h3 className="font-normal text-[18px] ">{item.title}</h3>
              
            </button>
          ))}
        </div>
        <Button btnText="Get Wallet" />
      </div> */}
      <NavigationMenu.Root className="relative z-[1] flex-1 hidden md:flex justify-end w-full">
        <NavigationMenu.List className="flex gap-8 items-center ">
          {navLinks.map((item) => (
            <NavigationMenu.Item className="flex">
              <NavigationMenu.Trigger className="group flex gap-2 items-center ">
                {item.isDropDown ? (
                  <span> {item.title}</span>
                ) : (
                  <Link href={`/${item.route}`}>{item.title}</Link>
                )}
                <div className=" relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180">
                  {item.isDropDown && <ArrowDown />}
                </div>
              </NavigationMenu.Trigger>
              {item.isDropDown && (
                <NavigationMenu.Content
                  className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight 
              absolute top-[1.5rem] p-[10px] rounded-[5px] left-0  w-fit  border-[1px] border-[#7049F7] bg-main "
                >
                  <ul className="flex flex-col gap-4 pb-4 pr-[2rem] ">
                    {item.links?.map((link, index) => (
                      <Link
                        href={`/${item.route}/${link.name}`}
                        id={`${index}`}
                        className="flex group items-center gap-3 "
                      >
                        <Image
                          priority
                          src={link.image}
                          alt={link.name}
                          className="h-[20px] w-[20px] "
                        />
                        <span className="group-hover:text-blue-text ">
                          Staking {link.name}
                        </span>
                      </Link>
                    ))}
                  </ul>
                </NavigationMenu.Content>
              )}
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </nav>
  );
};
export default Navbar;

const navLinks = [
  {
    title: "Staking",
    isDropDown: true,
    route: "staking",
    links: [
      {
        image: BNB,
        name: "BNB",
      },
      {
        image: Biller,
        name: "Biller",
      },
      {
        image: Atom,
        name: "ATOM",
      },
      {
        image: TRX,
        name: "TRX",
      },
      {
        image: SOL,
        name: "SOL",
      },
      {
        image: ADA,
        name: "ADA",
      },
      {
        image: XTZ,
        name: "XTZ",
      },
    ],
  },
  { title: "NFT", route: "nft", isDropDown: false },
  {
    title: "Wallet",
    route: "wallet",
    isDropDown: true,
    links: [
      {
        image: BNB,
        name: "Binance Coin",
      },
      {
        image: BTC,
        name: "Bitcoin",
      },
      {
        image: Eth,
        name: "Ethereum",
      },
      {
        image: Tether,
        name: "Tether",
      },
      {
        image: SOL,
        name: "Solana",
      },
      {
        image: USD,
        name: "USD Coin",
      },
      {
        image: ADA,
        name: "Cardano",
      },
      {
        image: Wallet,
        name: "All Wallets",
        dashed: true,
      },
    ],
  },
  { title: "Support", isDropDown: false },
];
