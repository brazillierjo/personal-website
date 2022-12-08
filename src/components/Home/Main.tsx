import { Link } from "react-router-dom";
import { IS_MOBILE } from "../../helpers/AppWidth";
import Avatar from "../../assets/png/avatar.png";
import { TbBrandLinkedin } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import { BsArrowDownShort } from "react-icons/bs";
import { FaDev } from "react-icons/fa";

export const Main: React.FC<{}> = () => {
    const handleScroll = () => {
        const aboutMe = document.getElementById("about-me");
        aboutMe?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className='custom-h-screen relative mx-auto text-center'>
            <div className='absolute top-1/2 left-1/2 flex w-full -translate-y-1/2 -translate-x-1/2 flex-col space-y-3'>
                <img className='mx-auto mb-12 h-72' src={Avatar} alt='Personal avatar' />
                <h2 className='text-4xl font-bold'>RINCON BRAZILLIER Johan</h2>

                <div>
                    <p>Développeur front 👨‍💻</p>
                    <small className='italic text-gray-500'>React | TypeScript expert</small>
                </div>

                <div className='flex justify-center gap-2'>
                    <a title="linkedin.com" href='https://www.linkedin.com/in/johan-r-brazillier-9b917a174/' target='_blank'>
                        <TbBrandLinkedin size={25} />
                    </a>
                    <a title="github.com" href='https://github.com/brazillierjo' target='_blank'>
                        <VscGithub size={25} />
                    </a>
                    <a title='malt.fr' href='https://www.malt.fr/profile/brazillier' target='_blank'>
                        <FaDev size={25} />
                    </a>
                </div>

                <Link to='/contact'>
                    <button className='mt-8 rounded-full bg-secondary-100 px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-secondary-200'>
                        M'embaucher
                    </button>
                </Link>
            </div>
            {!IS_MOBILE && (
                <div className='absolute bottom-5 left-1/2 -ml-[15px] transform animate-bounce hover:cursor-pointer'>
                    <BsArrowDownShort onClick={handleScroll} size={30} />
                </div>
            )}
        </div>
    );
};
