import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import React from "react";

function Home() {
  return (
    <div className="container scroll-smooth">
      <Hero />
      <Projects />
    </div>
  );
}

export default Home;
