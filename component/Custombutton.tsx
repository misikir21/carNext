"use client";
import { CustombuttonProps } from "@/types";
import Image from "next/image";

const Custombutton = ({
  title,
  containerStyles,
  handleClick,
}: CustombuttonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Custombutton;
