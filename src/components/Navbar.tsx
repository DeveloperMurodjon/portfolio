"use client";

import Link from "next/link";
import React, { useState } from "react";
import DynamicImage from "./DynamicImage";

export default function Navbar() {
  const [imageState, setImageState] = useState<
    "default" | "hover" | "primary" | "active"
  >("default");
  const [imageName, setImageName] = useState<string>("sun");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className="sticky top-4 bg-white z-50 shadow-sm rounded-3xl container flex justify-between items-center mt-[16px] pt-1  pb-[10px]">
      <Link href={"/"}>
        <h3 className="font-bold text-5xl leading-[56px] space-x-[-1px]">
          mi<span className="text-purple">.</span>
        </h3>
      </Link>

      <div className="flex items-center gap-[30px]">
        <Link href={"/"}>
          <p className="text-lg leading-[32px] font-medium">Bosh sahifa</p>
        </Link>
        <a href={"#projects"}>
          <p className="text-lg leading-[32px] font-medium">Loyihalar</p>
        </a>
        {/* <Link href={"/"}>
          <p className="text-lg leading-[32px] font-medium">Men haqimda</p>
        </Link> */}
        <a href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
          <p className="text-lg leading-[32px] font-medium">Rezyume</p>
        </a>

        <button
          onClick={() => setImageName(imageName == "sun" ? "moon" : "sun")}
          onMouseEnter={() => setImageState("hover")}
          onMouseLeave={() => setImageState("default")}
          className="cursor-pointer"
        >
          <DynamicImage
            name={imageName}
            mode={theme}
            state={imageState}
            alt="theme"
            width={44}
            height={44}
          />
        </button>
      </div>
    </div>
  );
}
