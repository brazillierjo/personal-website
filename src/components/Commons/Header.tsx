import { useAtom } from "jotai";
import { NavLink } from "react-router-dom";
import { langAtom } from "../../atoms";
import clsx from "clsx";

export const Header: React.FC<{}> = () => {
    const [lang, setLang] = useAtom(langAtom);

    return (
        <>
            <div className='flex h-12 items-center justify-between'>
                <NavLink to='/' style={({ isActive }) => (isActive ? { borderBottom: "2px solid red" } : {})}>
                    <h2 className='text-xl font-extrabold text-primary lg:text-4xl'>
                        Johan<span className='text-secondary-100'>.</span>
                    </h2>
                </NavLink>

                <div className='hidden gap-5 lg:flex'>
                    <button
                        className={clsx(
                            lang === "en" &&
                                "border-b-2 border-secondary-100 text-secondary-100 transition-all duration-100"
                        )}
                        onClick={() => setLang("en")}>
                        English
                    </button>
                    <button
                        className={clsx(
                            lang === "fr" &&
                                "border-b-2 border-secondary-100 text-secondary-100 transition-all duration-100"
                        )}
                        onClick={() => setLang("fr")}>
                        Français
                    </button>
                </div>

                <div className='flex h-full items-center gap-5 font-semibold'>
                    <NavLink
                        style={({ isActive }) => (isActive ? { borderBottom: "2px solid red" } : {})}
                        className='border-secondary-100 transition-all duration-100 hover:border-b-2 hover:text-secondary-100'
                        to='/portfolio'>
                        Portfolio
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => (isActive ? { borderBottom: "2px solid red" } : {})}
                        className='border-secondary-100 transition-all duration-100 hover:border-b-2 hover:text-secondary-100'
                        to='/contact'>
                        Contact
                    </NavLink>
                </div>
            </div>

            <div className='mt-2 flex justify-center gap-5 border-0 border-t border-t-primary pt-2 lg:hidden'>
                <button
                    className={clsx(
                        lang === "en" &&
                            "border-b-2 border-secondary-100 text-secondary-100 transition-all duration-100"
                    )}
                    onClick={() => setLang("en")}>
                    English
                </button>
                <button
                    className={clsx(
                        lang === "fr" &&
                            "border-b-2 border-secondary-100 text-secondary-100 transition-all duration-100"
                    )}
                    onClick={() => setLang("fr")}>
                    Français
                </button>
            </div>
        </>
    );
};
