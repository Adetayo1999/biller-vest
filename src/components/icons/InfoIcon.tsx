"use client";

import { SvgProps } from "@/types";
import { FC } from "react";

const InfoIcon: FC<SvgProps> = (props) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.875 4.375V5.625H8.125V4.375H6.875ZM8.75 10.625V9.375H8.125V6.875H6.25V8.125H6.875V9.375H6.25V10.625H8.75ZM13.75 7.5C13.75 10.9375 10.9375 13.75 7.5 13.75C4.0625 13.75 1.25 10.9375 1.25 7.5C1.25 4.0625 4.0625 1.25 7.5 1.25C10.9375 1.25 13.75 4.0625 13.75 7.5ZM12.5 7.5C12.5 4.7375 10.2625 2.5 7.5 2.5C4.7375 2.5 2.5 4.7375 2.5 7.5C2.5 10.2625 4.7375 12.5 7.5 12.5C10.2625 12.5 12.5 10.2625 12.5 7.5Z"
        fill={props.fillColor || "white"}
      />
    </svg>
  );
};
export default InfoIcon;
