"use client";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Coin from "@/assets/images/BillerVest-coin.png";
import Ios from "@/assets/images/ios-icon.png";
import QR from "@/assets/images/qrCode.png";
import { FC } from "react";
import GoogleIcon from "../icons/GoogleIcon";
import CancelIcon from "../icons/CancelIcon";

interface Props {
  triggerChild: JSX.Element;
}

const GetWalletModal: FC<Props> = ({ triggerChild }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{triggerChild}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent p-[24px] md:p-[50px] ">
          <Dialog.Close
            asChild
            className="absolute right-[1rem] cursor-pointer top-[1rem] "
          >
            <CancelIcon />
          </Dialog.Close>
          <div className="flex gap-2 md:gap-[20px] items-center justify-center w-full ">
            <div className="border-t-[#FFFFFF26] border-t-[1px] w-full "></div>
            <Image src={Coin} alt="coin" className="h-[70px] w-[80px] " />
            <div className="border-t-[#FFFFFF26] border-t-[1px] w-full "></div>
          </div>
          <div className="mt-[45px] flex flex-col items-center ">
            <h2 className="font-medium text-[40px] text-center  ">
              Download BillerVest Wallet Mobile app
            </h2>
            <p className="mt-4 text-blue-text text-[24px] text-center ">
              An amazing way to manage your crypto in just one click
            </p>

            <div className="mt-[40px] flex flex-col items-center ">
              <h3 className="text-[24px] text-center mb-6 "> For mobile </h3>
              <div className="bg-white w-fit ">
                <Image src={QR} alt="qr" priority />
              </div>
              <p className="font-extralight text-[20px] mt-4 ">
                Scan QR CODE to download the mobile app
              </p>
            </div>
            <div className=" flex items-center gap-[70px] mt-9 ">
              <button className="bg-[#000] px-[25.5px] py-2 flex items-center gap-2 h-[60px] rounded-md ">
                <span className="font-extralight text-[18px]  ">
                  Download on{" "}
                  <span className="font-normal text-[24px]  "> App Store</span>
                </span>
                <Image src={Ios} alt="ios" priority />
              </button>

              <button className="bg-[#000] px-[25.5px] py-2 flex items-center gap-2 h-[60px] rounded-md ">
                <GoogleIcon />
                <span className="font-extralight text-[18px]  ">
                  Download on{" "}
                  <span className="font-normal text-[24px]  ">
                    Google Play Store
                  </span>
                </span>
              </button>
            </div>
            <div className="mt-8 flex flex-col items-center">
              <span className="text-[20px] mb-[30px] text-center ">
                {" "}
                For desktop{" "}
              </span>
              <div className=" flex items-center gap-[70px] mt-3 ">
                <button className="bg-[#000] px-[25.5px] py-2 flex items-center gap-2 h-[60px] rounded-md ">
                  <Image src={Ios} alt="ios" priority />
                  <span className="font-extralight text-[18px]  ">
                    Download on
                    <span className="font-normal text-[24px]  ">
                      App Store
                    </span>
                  </span>
                </button>

                <button className="bg-[#000] px-[25.5px] py-2 flex items-center gap-2 h-[60px] rounded-md ">
                  <GoogleIcon />
                  <span className="font-extralight text-[18px]  ">
                    Download on{" "}
                    <span className="font-normal text-[24px]  ">
                      Google Play Store
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default GetWalletModal;
