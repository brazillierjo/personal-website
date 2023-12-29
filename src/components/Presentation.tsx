import React from "react";
import { useAtom } from "jotai";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowDownShort } from "react-icons/bs";
import { useWindowSize } from "usehooks-ts";

import Avatar3 from "../assets/png/avatar3.png";
import { langAtom } from "../atoms";
import { IS_MOBILE } from "../helpers/AppWidth";
import { useLangData } from "../hooks/useLangData";
import { Generics } from "../Interfaces/IFiles";
import SocialLinks from "./Commons/SocialLinks";
import { MyTechnologies } from "./MyTechnologies";

export const Presentation = () => {
  const generics = useLangData("generics") as Generics | null;
  const { width } = useWindowSize();
  const [lang, _] = useAtom(langAtom);

  const handleScroll = () => {
    const aboutMe = document.getElementById("about-me");
    const marginTop = 70;
    const offset = aboutMe ? aboutMe.getBoundingClientRect().top + window.scrollY - marginTop : 0;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  if (!generics) return null;

  return (
    <div className="custom-min-h-screen relative mx-auto my-10 h-fit text-center lg:my-0">
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col space-y-16">
        <div className="mx-auto justify-center lg:flex lg:justify-start lg:gap-12">
          <img src={Avatar3} alt="Avatar" className="mx-auto h-56 rounded-full lg:h-72" />

          <div className="mt-12 text-center text-[25px] lg:mt-0 lg:text-left lg:text-[55px]">
            <h2>{generics.main.firstLine}</h2>
            <h3 className="leading-tight">{generics.main.secondLine}</h3>

            <SocialLinks />

            {lang === "fr" && (
              <div className="flex w-full flex-col justify-center gap-0 md:flex-row md:gap-4 lg:justify-start">
                <a
                  href="./CV.pdf"
                  download="CV-RINCON-BRAZILLIER-Johan.pdf"
                  className="custom-btn mx-auto flex w-full items-center gap-3 text-sm md:-mx-0 lg:text-base"
                >
                  Curriculum vitæ
                  <AiOutlineDownload className="h-6 w-6" />
                </a>
              </div>
            )}
          </div>
        </div>

        {width > 768 && <MyTechnologies />}
      </div>

      {!IS_MOBILE && (
        <div className="absolute bottom-5 left-1/2 -ml-[15px] transform animate-bounce hover:cursor-pointer">
          <BsArrowDownShort onClick={handleScroll} size={30} />
        </div>
      )}
    </div>
  );
};
