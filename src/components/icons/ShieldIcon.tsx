"use client";

import { SvgProps } from "@/types";
import { FC } from "react";

const ShieldIcon: FC<SvgProps> = (props) => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M146.469 184.531C169.768 184.531 188.656 165.643 188.656 142.344C188.656 119.044 169.768 100.156 146.469 100.156C123.169 100.156 104.281 119.044 104.281 142.344C104.281 165.643 123.169 184.531 146.469 184.531Z"
        fill={ props.fillColor || "#FEA106"}
      />
      <path
        d="M100.001 175L68.9699 156.25C60.2047 150.958 52.9571 143.49 47.9305 134.57C42.9039 125.65 40.2691 115.582 40.2823 105.344V50C46.9127 50 53.2716 47.366 57.9601 42.6775C62.6486 37.9893 65.2823 31.6304 65.2823 25H134.689C134.689 31.6304 137.323 37.9893 142.011 42.6775C146.699 47.366 153.058 50 159.689 50V105.375C159.7 115.605 157.067 125.665 152.046 134.578C147.026 143.492 139.787 150.957 131.032 156.25L100.001 175Z"
        stroke={props.strokeColor || "#2F0FA2"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M100.005 133.031C119.973 133.031 136.161 116.844 136.161 96.875C136.161 76.9066 119.973 60.7189 100.005 60.7189C80.0363 60.7189 63.8486 76.9066 63.8486 96.875C63.8486 116.844 80.0363 133.031 100.005 133.031Z"
        stroke={props.strokeColor || "#2F0FA2" }
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M81.5928 97.1564L94.218 109.813L120.843 83.1876"
        stroke={props.strokeColor || "#2F0FA2" }
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ShieldIcon;
