"use client";
import { CustombuttonProps } from "@/types";
import Image from "next/image";

const Custombutton = ({
  title,
  containerstyles,
  handleClick,
}: CustombuttonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerstyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Custombutton;
