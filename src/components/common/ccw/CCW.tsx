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
      className={`resp-margin border-1px py-[25px] flex justify-between items-center  `}
    >
      <div className={` text-[35px]  ${fontWeight} `}>{title}</div>
      <div className={`flex items-center gap-10  `}>
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
