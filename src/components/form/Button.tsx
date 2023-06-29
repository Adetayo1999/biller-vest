"use client";

import React, { ComponentPropsWithoutRef, forwardRef } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {
  bgColor?: string;
  textColor?: string;
  textStyle?: string;
  paddingBlock?: string;
  paddingInline?: string;
  btnText: string;
  icon?: JSX.Element;
  height?: string;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      bgColor = "bg-[#048FF9]",
      textColor = "#fff",
      paddingBlock,
      paddingInline,
      btnText,
      icon,
      textStyle,
      height,
      ...otherProps
    },

    ref
  ) => {
    return (
      <button
        {...otherProps}
        ref={ref}
        className={`flex items-center gap-[12px] rounded-[5px] w-fit ${
          height ? height : "h-fit"
        }
       ${
         paddingInline ? paddingInline : "px-[45px]"
       } text-center text-[${textColor}] 
      ${
        paddingBlock ? paddingBlock : "py-[16px]"
      } ${bgColor} text-[18px] font-medium `}
      >
        {icon && <span>{icon}</span>}
        <span className={textStyle && textStyle}> {btnText} </span>
      </button>
    );
  }
);
export default Button;
