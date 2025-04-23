import React from "react";
import DynamicImage from "./DynamicImage";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col items-start pt-[148px] pb:[50px] pb-[74px] md:items-center md:pt-[375px] md:pb-[120px]">
      <h1 className=" font-bold font-sora space-x-[-1px] text-[#262626] text-[32px] leading-[48px] md:text-[56px] md:leading-[70px] ">
        Salom, Men Isroiljonov Murodjon.
      </h1>
      <h2 className=" text-secondary font-bold mt-[5px] text-[28px] leading-[36px] md:mt-32px md:leading-[48px] md:py-8 md:text-[32px]">
        Front-end Dasturchi
      </h2>
      <p className=" tracking-tight text-black-text  text-base leading-6 mt-[29px] md:text-[24px] md:leading-9">
        Always learning and growing in the world of web development.
      </p>
      <div className="flex items-center gap-[10px] mt-[31px]  md:gap-[25px] md:mt-8">
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
          <p className="whitespace-nowrap text-neutral font-bold space-x-[2%] border border-purple500 rounded-[5px] items-center flex uppercase text-xs leading-[22px] py-2 px-[10px]  md:text-sm md:leading-[24px] md:py-2.5 md:px-4">
            Men bilan bog'laning
          </p>
        </a>

        {/* resume  */}
        <a href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
          <p className="text-neutral font-bold  space-x-[2%] border border-purple500 rounded-[5px] items-center flex uppercase text-xs leading-[22px] py-2 px-[10px] md:text-sm md:leading-[24px] md:py-2.5 md:px-4 ">
            resume
          </p>
        </a>
      </div>
    </div>
  );
}

export default Hero;
