"use client";

import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface Props {
  image?: string | StaticImageData;
  textArr:Array<{ head: string; paragraph: string }>;
}

const Info2: FC<Props> = ({ image, textArr }) => {
  return (
    <section className="bg-primary-main resp-padding flex items-center " >
      <div className="flex-1 flex flex-col gap-[80px] ">
        {textArr.map((text, index) => (
          <div className="" id={`${index}`}>
            <h4 className="font-[600] text-[28px] mb-[20px] ">{text.head}</h4>
            <p className="font-[400] text-blue-text text-[20px] ">
              {text.paragraph}
            </p>
          </div>
        ))}
      </div>

      <div className={`flex-1 flex items-center justify-center `}>
        <Image src={image!} alt="img" />
      </div>
    </section>
  );
};
export default Info2;
