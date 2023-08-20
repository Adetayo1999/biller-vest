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
import { IoMenu, IoClose } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";

import Link from "next/link";
import GetWalletModal from "@/components/modal/GetWalletModal";
import { useState } from "react";
import CryptoConverter from "@/components/modal/CryptoConverter";

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleNav = (): void => {
    setOpenMobileNav((prev) => !prev);
  };

  const openList = (id: number): void => {
    if (activeId !== null && activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <nav className="mobile-fixed bg-main resp-padding md:resp-margin py-[25px] flex justify-between items-center border-1px">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" priority height={200} width={150} />
      </Link>
      {/* mobile  */}
      <div className="  md:hidden">
        <div className={`mobile-nav ${openMobileNav ? "active" : "close"} `}>
          <div className="p-6 flex flex-col  ">
            <button className=" self-end " onClick={toggleNav}>
              <IoClose color="#fff" size={30} />
            </button>

            <div className="flex flex-col gap-5 mt-9 ">
              {navLinks.map((item, index) => (
                <div
                  role="button"
                  onClick={() => openList(item.id)}
                  key={index}
                  className="group flex flex-col "
                >
                  <div className=" flex  items-center justify-between border-b-[.5px] pb-4 border-b-[#8a8989]">
                    {item.isDropDown ? (
                      <li className="text-[25px] font-[300]">{item.title}</li>
                    ) : (
                      <Link
                        className="text-[25px] font-[300]  "
                        href={`${item.route}`}
                        onClick={toggleNav}
                      >
                        {item.title}
                      </Link>
                    )}

                    <div className={`${activeId === item.id && "rotate-180"}`}>
                      {item.isDropDown && (
                        <FiChevronDown size={20} color="#fff" />
                      )}
                    </div>
                  </div>

                  {item.isDropDown && activeId === item.id && (
                    <div
                      className={`${
                        activeId === item.id &&
                        "transition-all duration-[.45s] "
                      } border-b-[.5px] mt-5 pb-4 border-b-[#8a8989] `}
                    >
                      <ul className="flex flex-col gap-4 pb-4 pr-[2rem] ">
                        {item.links?.map((link, index) => (
                          <Link
                            href={`/${item.route}/${link.name}`}
                            key={`link-${index}`}
                            className="flex group items-center gap-3 "
                            onClick={toggleNav}
                          >
                            <Image
                              priority
                              src={link.image}
                              alt={link.name}
                              className="h-[20px] w-[20px] "
                            />
                            {item.title.toLowerCase() === "staking" && (
                              <span>Staking </span>
                            )}
                            {link.name}

                            {item.title.toLowerCase() === "wallet" && (
                              <span> Wallet</span>
                            )}
                          </Link>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button onClick={toggleNav} className="cursor-pointer ">
          <IoMenu color="#fff" size={30} />
        </button>
      </div>

      {/* desktop navbar  */}
      <div className=" hidden md:flex items-center gap-[30px] ">
        <NavigationMenu.Root className="relative z-[1] flex-1 hidden md:flex justify-end w-full">
          <NavigationMenu.List className="flex gap-8 items-center ">
            {navLinks.map((item, index) => (
              <NavigationMenu.Item key={`id-${index}`} className="flex">
                <NavigationMenu.Trigger className="group flex gap-2 items-center ">
                  {item.isDropDown ? (
                    <span className="font-normal text-[18px]">
                      {" "}
                      {item.title}
                    </span>
                  ) : (
                    <Link
                      href={`/${item.route}`}
                      className="font-normal text-[18px]"
                    >
                      {item.title}
                    </Link>
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
                          key={`link-${index}`}
                          className="flex group items-center gap-3 "
                        >
                          <Image
                            priority
                            src={link.image}
                            alt={link.name}
                            className="h-[20px] w-[20px] "
                          />
                          <span className="group-hover:text-blue-text ">
                            {item.title.toLowerCase() === "staking" && (
                              <span>Staking </span>
                            )}
                            {link.name}

                            {item.title.toLowerCase() === "wallet" && (
                              <span> Wallet</span>
                            )}
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
        <CryptoConverter triggerChild={<Button btnText="Get Wallet" />} />
      </div>
    </nav>
  );
};
export default Navbar;

const navLinks = [
  {
    id: 1,
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
  { id: 2, title: "NFT", route: "nft", isDropDown: false },
  {
    id: 3,
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
  { id: 4, title: "Support", isDropDown: false, route: "" },
];
