"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const Hover = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
  <button
   
  >
  <Image src={'/playbutton.png'} alt="Play" width={50} height={50}/> 
  </button>
);

export default Hover;