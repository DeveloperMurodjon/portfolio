import React from "react";
import { ProjectCard } from "./index";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      description:
        "O'z portfolio saytim, unda ceo va performansni oshirish uchun eng so'ngi texnalogiyaardan foidalanganman",
      link: "https://murodojonisroiljonovportfolio.vercel.app/",
      codeLink: "https://github.com/DeveloperMurodjon/portfolio",
      usedStacks: ["typescript", "nextjs", "tailwindcss"],
    },
    {
      title: "You tube kloni",
      description:
        "YouTube'ning to'liq kloni. Asosiy sahifa, Shorts, tavsiyalar va kanal sahifalari bilan. Rapid API orqali video ma'lumotlari olinadi.",
      link: "https://youtube-clone-with-react-typescript.vercel.app/",
      codeLink:
        "https://github.com/DeveloperMurodjon/youtube-clone-with-react-typescript",
      usedStacks: ["react", "typescript", "redux-toolkit"],
    },
    {
      title: "Red clothes",
      description:
        "Redux Toolkit orqali boshqariladigan, API bilan ishlovchi - kiyim do'koni. Tailwind bilan chiroyli UI, cart va wishlist funksiyalari bilan.",
      link: "https://red-clothes.vercel.app/",
      codeLink: "https://github.com/DeveloperMurodjon/Red-clothes",
      usedStacks: ["github", "react", "redux-toolkit", "tailwindcss"],
    },
    {
      title: "Embed code landing page",
      description:
        "Responsiv va zamonaviy dizayn. GitHub orqali jamoa bo'lib yaratilgan bo'lib. Lucide ikonlar sahifaga estetik ko'rinish bergan",
      link: "https://8-oy-8-dars-psi.vercel.app/",
      codeLink: "https://github.com/mustafo-coder/8-oy-8-dars",
      usedStacks: ["github", "nextjs", "lucide", "tailwindcss"],
    },
  ];

  return (
    <section className="py-[180px]" id="projects">
      <h2 className="font-sora font-bold text-[56px] leading-[70px] space-x-[-1px] text-center pb-[114px]">
        Loyihalar
      </h2>
      <div className="grid grid-cols-2 gap-[70px]">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
