import { MouseEventHandler } from "react";
export interface Custombutton {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
