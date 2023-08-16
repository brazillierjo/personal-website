import { useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { useLocation } from "react-router-dom";
import { langAtom } from "../../atoms";
import { useLangData } from "../../hooks/useLangData";
import { Generics } from "../../Interfaces/IFiles";
import { RxHamburgerMenu } from "react-icons/rx";

function MobileNavbar() {
    const [lang, setLang] = useAtom(langAtom);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const generics = useLangData("generics") as Generics | null;
    const location = useLocation();

    if (!generics) return null;

    return (
        <header className='absolute right-0 top-0 z-10 w-full bg-gradient-to-b from-primary-100 via-primary-50 to-white px-5'>
            <div className='container mx-auto py-5 transition-all duration-300'>
                <div className='flex items-center justify-between'>
                    <div className='flex w-full items-center justify-between gap-8'>
                        <NavLink to='/'>
                            <h2 className='text-lg font-extrabold'>Johan.</h2>
                        </NavLink>

                        <div className='flex justify-center gap-5 text-sm'>
                            <button
                                className={clsx(lang === "en" && "border-b-2 border-primary-300")}
                                onClick={() => {
                                    setLang("en");
                                    setIsMenuOpen(!isMenuOpen);
                                }}>
                                English
                            </button>

                            <button
                                className={clsx(lang === "fr" && "border-b-2 border-primary-300")}
                                onClick={() => {
                                    setLang("fr");
                                    setIsMenuOpen(!isMenuOpen);
                                }}>
                                Français
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MobileNavbar;
