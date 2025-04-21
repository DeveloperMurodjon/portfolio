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
    <div className="container flex justify-between items-center pt-[74px] pb-[14px]">
      <Link href={"/"}>
        <h3 className="font-bold text-5xl leading-[56px] space-x-[-1px]">
          mi<span className="text-purple">.</span>
        </h3>
      </Link>

      <div className="flex items-center gap-[30px]">
        <Link href={"/"}>
          <p className="text-lg leading-[32px] font-medium">Home</p>
        </Link>
        <Link href={"/"}>
          <p className="text-lg leading-[32px] font-medium">Projects</p>
        </Link>
        <Link href={"/"}>
          <p className="text-lg leading-[32px] font-medium">About</p>
        </Link>
        <a href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
          <p className="text-lg leading-[32px] font-medium">Resume</p>
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
