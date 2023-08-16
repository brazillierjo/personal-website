import Avatar3 from "../assets/png/avatar3.png";
import { IS_MOBILE } from "../helpers/AppWidth";
import { BsArrowDownShort } from "react-icons/bs";
import { MyTechnologies } from "./MyTechnologies";
import { useLangData } from "../hooks/useLangData";
import { Generics } from "../Interfaces/IFiles";
import { useWindowSize } from "usehooks-ts";
import SocialLinks from "./Commons/SocialLinks";

export const Presentation: React.FC<{}> = () => {
    const generics = useLangData("generics") as Generics | null;
    const { width } = useWindowSize();

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
        <div className='custom-min-h-screen relative mx-auto my-10 h-fit text-center lg:my-0'>
            <div className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col space-y-16'>
                <div className='mx-auto justify-center lg:flex lg:justify-start lg:gap-12'>
                    <img src={Avatar3} alt='Avatar' className='mx-auto h-72 rounded-full lg:h-72' />

                    <div className='mt-12 text-justify text-[35px] lg:mt-0 lg:text-left lg:text-[55px]'>
                        <h2>{generics.main.firstLine}</h2>
                        <h3 className='leading-tight'>{generics.main.secondLine}</h3>

                        <SocialLinks />
                    </div>
                </div>

                {width > 768 && <MyTechnologies />}
            </div>

            {!IS_MOBILE && (
                <div className='absolute bottom-5 left-1/2 -ml-[15px] transform animate-bounce hover:cursor-pointer'>
                    <BsArrowDownShort onClick={handleScroll} size={30} />
                </div>
            )}
        </div>
    );
};
