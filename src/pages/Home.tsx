import { useEffect } from "react";

import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Commons/Contact";
import { Education } from "../components/Education";
import { Experiences } from "../components/Experiences";
import { Portfolio } from "../components/Portfolio";
import { Presentation } from "../components/Presentation";
import { useLangData } from "../hooks/useLangData";
import { Generics } from "../Interfaces/IFiles";

export const Home: React.FC<{}> = () => {
  const generics = useLangData("generics") as Generics | null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!generics) return null;

  return (
    <>
      <Presentation />
      <AboutMe />
      <Portfolio />
      <div id="experiences-and-educations" className="py-20">
        <h2 className="mb-5 w-fit pb-1 text-3xl font-bold">{generics.experiences.title}</h2>
        <div className="grid gap-10 md:grid-cols-2 md:justify-between">
          <Experiences />
          <Education />
        </div>
      </div>
      <Contact />
    </>
  );
};
