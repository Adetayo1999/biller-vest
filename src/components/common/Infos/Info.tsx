"use client";

import Image, { StaticImageData } from "next/image";
import Dot from "@/assets/images/dot.png";
import { FC } from "react";
import Button from "@/components/form/Button";

interface Props {
  bgColor?: string;
  reversedRow?: boolean;
  image?: string | StaticImageData;
  list?: Array<{ content: string }>;
  paragraph?: string;
  isFullStop?: boolean;
  btnTitle1?: string;
  btnTitle2?: string;
  btnColor1?: string;
  btnColor2?: string;
  title?: string;
  listGap?: string;
  paragraphWidth?: string;
  contentGap?: string;
}

const Info: FC<Props> = ({
  bgColor,
  reversedRow,
  image,
  list,
  paragraph,
  isFullStop,
  btnTitle1 = "Get Wallet",
  btnTitle2,
  btnColor1,
  btnColor2,
  title,
  listGap,
  paragraphWidth,
  contentGap,
}) => {
  return (
    <div
      className={`py-[50px] resp-padding ${bgColor} ${contentGap} flex items-center ${
        reversedRow ? "flex-row-reverse" : "flex-row"
      } `}
    >
      <div className={`flex-1 self-end flex ${reversedRow && "justify-end"} `}>
        <Image src={image!} alt="img" />
      </div>
      <div className="flex-1">
        <h2 className="font-semibold text-[40px] ">{title}</h2>
        {list && (
          <div className="mt-[35px] flex flex-col gap-[15px] ">
            {list.map((item, index) => (
              <div
                className={`flex ${
                  listGap ? listGap : isFullStop ? "gap-[2px]" : "gap-[25px] "
                }   items-center `}
                id={`${index}`}
              >
                <div
                  className={`${
                    isFullStop && "flex items-center "
                  }   h-[15px] w-[15px] `}
                >
                  {isFullStop ? (
                    <span className="text-blue-text  ">·</span>
                  ) : (
                    <Image src={Dot} alt="dot" height={15} width={15} />
                  )}
                </div>
                <p className="text-blue-text font-normal text-[18px] ">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        )}
        {paragraph && (
          <p
            className={` text-blue-text font-normal mt-[40px] text-[18px] ${paragraphWidth} `}
          >
            {paragraph}
          </p>
        )}
        <div className="flex items-center mt-[50px] gap-6 ">
          <Button
            btnText={btnTitle1}
            bgColor={btnColor1}
            paddingBlock="py-[15px] "
            paddingInline="px-[45px]"
            textStyle="font-normal text-[16px] "
          />

          {btnTitle2 && (
            <Button
              btnText={btnTitle2}
              bgColor={btnColor2}
              textStyle="font-normal text-[16px] "
              paddingBlock="py-[15px] "
              paddingInline="px-[35px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Info;
