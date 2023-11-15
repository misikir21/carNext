"use client";
import React from "react";
import Image from "next/image";
import { Custombutton } from ".";
const handleScroll = () => {};
const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find ,book or rent a car --quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effotless booking
          process
        </p>
        <Custombutton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="her-__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero " fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
