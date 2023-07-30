"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { FC } from "react";
import CancelIcon from "../icons/CancelIcon";

interface Props {
  triggerChild: JSX.Element;
}

const CryptoConverter: FC<Props> = ({ triggerChild }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{triggerChild}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent p-[18px] md:p-[50px] h-[80%] md:h-fit flex justify-center items-center  ">
          <Dialog.Close
            asChild
            className="absolute right-[1rem] cursor-pointer top-[1rem] "
          >
            <CancelIcon />
          </Dialog.Close>
          <div className="w-full">
            <iframe
              id="iframe-widget"
              src="https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=0.1&amountFiat=1500&backgroundColor=FFFFFF&darkMode=false&from=btc&fromFiat=eur&horizontal=false&isFiat&lang=en-US&link_id=6162a5c2158ef2&locales=true&logo=false&primaryColor=230251&to=eth&toFiat=eth&toTheMoon=true"
              //   style={{ height: "356px", width: "100%", border: "none" }}
              className="h-[22.25rem] w-full border-none"
            ></iframe>
          </div>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default CryptoConverter;
