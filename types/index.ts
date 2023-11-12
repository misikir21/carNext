import { MouseEventHandler } from "react";
export interface CustombuttonProps {
  title: string;
  containerstyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
