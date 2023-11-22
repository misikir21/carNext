import { SearchManufacturer } from "@/component";
import { manufacturers } from "@/constant";
import { MouseEventHandler } from "react";
export interface CustombuttonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManufacturerprops {
  manufacturer: string;
  setmanufacturer: (manufacturer: string) => void;
}
