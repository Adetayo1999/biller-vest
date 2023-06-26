"use client";
import Logo from "@/assets/images/BillerVest.png";
import Button from "@/components/form/Button";
import ArrowDown from "@/components/icons/ArrowDown";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="resp-margin py-[25px] flex justify-between items-center border-1px">
      <div className="">
        <Image src={Logo} alt="logo" priority height={200} width={150} />
      </div>

      <div className="flex gap-8 items-center ">
        <div className="flex gap-10 lg:gap-16 items-center">
          {navLinks.map((item) => (
            <button className="flex gap-4 items-center" >
              <h3 className="font-normal text-[18px] " >{item.title}</h3>
              {item.isDropDown && <ArrowDown />}
            </button>
          ))}
        </div>
        <Button btnText="Get Wallet" />
      </div>
    </nav>
  );
};
export default Navbar;

const navLinks = [
  { title: "Staking", isDropDown: true },
  { title: "NFT", isDropDown: false },
  { title: "Wallet", isDropDown: true },
  { title: "Support", isDropDown: true },
];
