import React from "react";
import { IconProps } from "@lib/types/types";

const ArrowIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      x="0px"
      y="0px"
      width={width}
      height={height}
    >
      <path d="M20,66.44a1,1,0,0,1-.72-1.7l30-30.89a1,1,0,1,1,1.43,1.39l-30,30.89A1,1,0,0,1,20,66.44Z" />
      <path d="M80,66.44a1,1,0,0,1-.72-.3l-30-30.89a1,1,0,1,1,1.43-1.39l30,30.89a1,1,0,0,1-.72,1.7Z" />
    </svg>
  );
};

export default ArrowIcon;
