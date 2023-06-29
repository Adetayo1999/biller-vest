"use client";

import { SvgProps } from "@/types";
import { FC } from "react";

const CancelIcon: FC<SvgProps> = (props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5156 34.486L24.0016 24L34.4876 34.486M34.4876 13.514L23.9996 24L13.5156 13.514"
        stroke={props.strokeWidth || "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CancelIcon;
