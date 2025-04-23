import DynamicImage from "@/components/DynamicImage";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import React from "react";

function Home() {
  return (
    <div className="container scroll-smooth flex flex-col items-center">
      <Hero />
      <a href="#projects" className="shadow-2xl cursor-pointer">
        <button>
          <DynamicImage name="arrow-down" mode="light" state="default" />
        </button>
      </a>
      <Projects />
    </div>
  );
}

export default Home;
