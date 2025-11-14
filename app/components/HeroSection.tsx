"use client";  /* This component uses dynamic behavior (typing animation) */
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 
                 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
    >
      {/* Left side: Name and animated titles */}
      <div className="text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-5xl font-bold mb-4">Rudrakshi Moudgil</h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          I&rsquo;m a{" "}
          <TypeAnimation
            sequence={[
              "Data Analyst", 2000,   // type "Data Analyst", then pause 2s
              "Tech Leader", 2000,    // replace with "Tech Leader", then pause 2s
              "Business Strategist", 2000,  // replace with "Business Strategist", pause
            ]}
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </h2>
      </div>
      {/* Right side: Headshot image */}
      <div className="mb-8 md:mb-0 mr-0 md:mr-4">
        <Image 
          src="/headshot.jpg" 
          alt="Rudrakshi Moudgil" 
          width={300} 
          height={300}
          className="rounded-full border-4 border-white shadow-xl"
        />
      </div>
    </section>
  );
}