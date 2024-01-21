import { SearchManufacturer } from "@/components";
import { manufacturers } from "@/constants";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }

export interface CustomFilterProps {
    title: string;
}

export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}


export interface ListingProps {

    index: number;
    name: string;
    price: string;
    detail: string;
    image: string;
   
  };