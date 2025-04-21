import React from "react";
import DynamicImage from "./DynamicImage";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col items-center pt-[120px]">
      <h1 className="text-[56px] font-bold font-sora leading-[70px] space-x-[-1px] text-[#262626]">
        Salom, Men Isroiljonov Murodjon.
      </h1>
      <h2 className="text-[32px] text-secondary mt-32px font-bold leading-[48px] py-8">
        Front-end Developer
      </h2>
      <p className="text-[24px] leading-9 tracking-tight text-black-text">
        Always learning and growing in the world of web development.
      </p>
      <div className="flex gap-[25px] mt-8">
        <a
          href="https://github.com/DeveloperMurodjon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DynamicImage name="github" mode="light" state="primary" />
        </a>
        <a
          href="https://www.linkedin.com/in/murodjonisroiljonov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DynamicImage name="linkedin" mode="light" state="primary" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=murodjonisroiljonov4@gmail.com&su=Portfolio "
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition duration-200"
        >
          Men bilan bog'laning
        </a>
      </div>
    </div>
  );
}

export default Hero;
