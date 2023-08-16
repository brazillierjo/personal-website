import clsx from "clsx";
import ReactScrollLink from "../Commons/ReactScrollLink";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { useLocation } from "react-router-dom";
import { langAtom } from "../../atoms";
import { useState } from "react";
import { useLangData } from "../../hooks/useLangData";
import { Generics } from "../../Interfaces/IFiles";

function DesktopNavbar() {
    const [lang, setLang] = useAtom(langAtom);
    const [scrollOffset, setScrollOffset] = useState(0);

    const generics = useLangData("generics") as Generics | null;
    const location = useLocation();

    if (!generics) return null;

    return (
        <header className='fixed top-0 left-0 z-10 w-full bg-gradient-to-b from-primary-100 via-primary-50 to-white'>
            <div className={`transition-all duration-300 container mx-auto ${scrollOffset >= 50 ? "py-2" : "py-5"}`}>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-8'>
                        <NavLink to='/'>
                            <h2 className='text-xl font-extrabold'>Johan.</h2>
                        </NavLink>

                        <div className='hidden gap-5 text-sm lg:flex'>
                            <button
                                className={clsx(lang === "en" && "border-b-2 border-primary-300")}
                                onClick={() => setLang("en")}>
                                English
                            </button>

                            <button
                                className={clsx(lang === "fr" && "border-b-2 border-primary-300")}
                                onClick={() => setLang("fr")}>
                                Français
                            </button>
                        </div>
                    </div>

                    <nav className='flex items-center gap-5 text-sm'>
                        <ReactScrollLink to='about-me' label={generics.aboutMe.title} />
                        <ReactScrollLink to='portfolio' label={generics.portfolio.title} />
                        <ReactScrollLink to='experiences-and-educations' label={generics.experiences.title} />
                        <ReactScrollLink to='/contact' label={generics.contactMe.title} />
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default DesktopNavbar;
