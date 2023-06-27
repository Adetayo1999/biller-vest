"use client";

import Dot from "@/assets/images/dot.png";

import Button from "@/components/form/Button";
import AppleIcon from "@/components/icons/AppleIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface Props {
  title: string;
  titleStyle?: string;
  list?: Array<{ content: string }>;
  paragraph?: string;
  coinName?: string;
  image: string | StaticImageData;
  coinNameStyle?: string;
  sectionMargin?: string;
}

const CTA: FC<Props> = ({
  title,
  list,
  paragraph,
  image,
  coinName,
  titleStyle = "font-normal text-[70px] ",
  coinNameStyle,
  sectionMargin = "mt-[55px]",
}) => {
  return (
    <section
      className={`resp-margin ${sectionMargin} flex justify-between items-center `}
    >
      <div className="">
        <h1 className={titleStyle}>
          {title} <span className={coinNameStyle}>{coinName}</span>{" "}
        </h1>
        <p className="font-normal text-[26px] ">{paragraph}</p>
        {list && (
          <div className="mt-[20px] flex flex-col gap-4  ">
            {list.map((item, index) => (
              <div className="flex gap-1 items-center " id={`${index}`}>
                <div className="h-[15px] w-[15px] ">
                  <Image src={Dot} alt="dot" height={15} width={15} />
                </div>
                <p className="text-blue-text font-normal text-[20px] ">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        )}
        <div className="mt-[25px] flex items-center gap-5 ">
          <Button
            icon={<AppleIcon />}
            textStyle="font-work text-[14px]"
            btnText="Get on iPhone"
            paddingInline="px-[14px]"
            bgColor="bg-[#1A1A1A]"
            height="h-[52px]"
          />
          <Button
            icon={<GoogleIcon />}
            textStyle="font-work text-[14px] text-[#090909] "
            btnText="Get on Android"
            paddingInline="px-[14px]"
            bgColor="bg-white"
            height="h-[52px]"
          />
        </div>
      </div>
      <div className="relative">
        <Image src={image!} alt="tablet" priority />
      </div>
    </section>
  );
};
export default CTA;
