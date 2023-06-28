"use client";

import { FC } from "react";

interface Props {
  title: string;
  list: Array<{ title: string; icon: JSX.Element }>;
  reversedRow?: boolean;
  fontWeight?: string;
}

const CCW: FC<Props> = ({
  title,
  list,
  reversedRow,
  fontWeight = "font-normal",
}) => {
  return (
    <section
      className={`resp-margin border-1px py-[25px] flex flex-col  md:flex-row md:justify-between  md:items-center  `}
    >
      <div className={` text-[35px] mb-5 md:mb-0 ${fontWeight} `}>
        {title.replace("%20", " ")}
      </div>
      <div className={`flex flex-wrap items-center gap-4 md:gap-10  `}>
        {list.map((item, index) => (
          <button
            id={`${index}`}
            className={`flex gap-2 items-center ${
              reversedRow ? "flex-row-reverse" : "flex-row"
            } `}
          >
            <span
              className={` ${
                item.title === "Security" ? "text-blue-text" : "text-white"
              } font-medium text-[20px] `}
            >
              {item.title}
            </span>
            <span>{item.icon}</span>
          </button>
        ))}
      </div>
    </section>
  );
};
export default CCW;
