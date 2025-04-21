import React from "react";
import DynamicImage from "./DynamicImage";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col items-center pt-[120px] pb-[120px]">
      <h1 className="text-[56px] font-bold font-sora leading-[70px] space-x-[-1px] text-[#262626]">
        Salom, Men Isroiljonov Murodjon.
      </h1>
      <h2 className="text-[32px] text-secondary mt-32px font-bold leading-[48px] py-8">
        Front-end Dasturchi
      </h2>
      <p className="text-[24px] leading-9 tracking-tight text-black-text">
        Always learning and growing in the world of web development.
      </p>
      <div className="flex gap-[25px] mt-8">
        {/* github  */}
        <a
          href="https://github.com/DeveloperMurodjon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DynamicImage name="github" mode="light" state="primary" />
        </a>
        {/* linkedin  */}
        <a
          href="https://www.linkedin.com/in/murodjonisroiljonov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DynamicImage name="linkedin" mode="light" state="primary" />
        </a>
        {/* telegram */}
        <a href="https://t.me/isroiljonov1214" target="_blank">
          <DynamicImage name="telegram" mode="light" state="primary" />
        </a>

        {/* gmail      */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=murodjonisroiljonov4@gmail.com&su=Portfolio orqali bog‘lanish&body=Salom Murodjon, men siz bilan bog‘lanmoqchiman."
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-neutral font-bold text-sm leading-[24px] space-x-[2%] uppercase py-2.5 px-4 border border-purple500 rounded-[5px] items-center flex">
            Men bilan bog'laning
          </p>
        </a>
        {/* resume  */}
        <a href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
          <p className="text-neutral font-bold text-sm leading-[24px] space-x-[2%] uppercase py-2.5 px-4 border border-purple500 rounded-[5px] items-center flex">
            resume
          </p>
        </a>
      </div>
    </div>
  );
}

export default Hero;
