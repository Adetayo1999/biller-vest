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
  reverseCol?: boolean;
  showBtns?: boolean;
}

const Info: FC<Props> = ({
  bgColor,
  reversedRow,
  reverseCol,
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
  showBtns = true,
}) => {
  return (
    <div
      className={`py-[50px] resp-padding ${bgColor} ${contentGap} flex flex-col gap-5 md:gap-0 items-center ${
        reversedRow ? "  md:flex-row-reverse" : "  md:flex-row"
      } `}
    >
      <div
        className={`flex-1 md:self-end items-center flex ${
          reversedRow && "justify-end"
        } `}
      >
        <Image src={image!} alt="img" />
      </div>
      <div className="flex-1 flex items-center md:items-start flex-col ">
        <h2 className="font-semibold text-[25px] md:text-[40px] text-center md:text-start ">
          {title}
        </h2>
        <div
          className={` flex ${
            reverseCol ? " md:flex-col-reverse" : "flex-col"
          }  `}
        >
          {list && (
            <div className="mt-[30px] flex flex-col gap-3 md:gap-[15px] ">
              {list.map((item, index) => (
                <div
                  className={`flex ${
                    listGap
                      ? listGap
                      : isFullStop
                      ? "gap-[2px]"
                      : "gap-4 md:gap-[25px] "
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
                      <Image
                        src={Dot}
                        alt="dot"
                        height={15}
                        width={15}
                        className="h-[15px] w-[15px] "
                      />
                    )}
                  </div>
                  <p className="text-blue-text font-normal text-[16px] md:text-[18px] ">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          )}
          {paragraph && (
            <p
              className={` text-blue-text font-normal mt-[35px] text-center md:text-start  text-[16px] md:text-[18px] ${paragraphWidth} `}
            >
              {paragraph}
            </p>
          )}
        </div>
        {showBtns && (
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
        )}
      </div>
    </div>
  );
};
export default Info;
