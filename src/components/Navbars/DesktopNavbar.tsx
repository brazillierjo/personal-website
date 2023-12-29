import { useState } from "react";
import clsx from "clsx";
import { useAtom } from "jotai";

import { langAtom } from "../../atoms";
import { useLangData } from "../../hooks/useLangData";
import { Generics } from "../../Interfaces/IFiles";
import ReactScrollLink from "../Commons/ReactScrollLink";

function DesktopNavbar() {
  const [lang, setLang] = useAtom(langAtom);
  const [scrollOffset, _] = useState(0);

  const generics = useLangData("generics") as Generics | null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!generics) return null;

  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-gradient-to-b from-primary-100 via-primary-50 to-white">
      <div className={`container mx-auto transition-all duration-300 ${scrollOffset >= 50 ? "py-2" : "py-5"}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={scrollToTop}>
              <h2 className="text-xl font-extrabold">Johan.</h2>
            </button>

            <div className="hidden gap-5 text-sm lg:flex">
              <button
                className={clsx(lang === "en" && "border-b-2 border-primary-300", "text-xl")}
                onClick={() => setLang("en")}
              >
                🇬🇧
              </button>

              <button
                className={clsx(lang === "fr" && "border-b-2 border-primary-300", "text-xl")}
                onClick={() => setLang("fr")}
              >
                🇫🇷
              </button>
            </div>
          </div>

          <nav className="flex items-center gap-5 text-sm">
            <ReactScrollLink to="about-me" label={generics.aboutMe.title} />
            <ReactScrollLink to="portfolio" label={generics.portfolio.title} />
            <ReactScrollLink to="experiences-and-educations" label={generics.experiences.title} />
            <ReactScrollLink to="contact" label={generics.contactMe.title} />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default DesktopNavbar;
