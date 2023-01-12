import { Link } from "react-router-dom";
import { IS_MOBILE } from "../../helpers/AppWidth";
import Avatar3 from "../../assets/png/avatar3.png";
import { TbBrandLinkedin } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import { BsArrowDownShort } from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import { MyTechnologies } from "./MyTechnologies";

export const Main: React.FC<{}> = () => {
    const handleScroll = () => {
        const aboutMe = document.getElementById("about-me");
        aboutMe?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className='md:custom-h-screen relative mx-auto h-fit text-center'>
            <div className='top-1/2 left-1/2 flex w-full -translate-y-1/2 -translate-x-1/2 flex-col space-y-3 md:absolute'>
                <div className='md:flex md:justify-center'>
                    <div className='md:w-1/2'>
                        <img
                            className='mx-auto mb-5 h-[200px] rounded-full lg:h-[300px]'
                            src={Avatar3}
                            alt='Personal avatar'
                        />
                    </div>
                    <div className='my-auto flex flex-col space-y-3 md:w-1/2'>
                        <h2 className='text-4xl font-bold'>RINCON BRAZILLIER Johan</h2>
                        <div>
                            <p>Développeur front 👨‍💻</p>
                            <small className='italic text-gray-500'>React | TypeScript expert</small>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <a
                                title='linkedin.com'
                                href='https://www.linkedin.com/in/johan-r-brazillier-9b917a174/'
                                target='_blank'>
                                <TbBrandLinkedin size={40} />
                            </a>
                            <a title='github.com' href='https://github.com/brazillierjo' target='_blank'>
                                <VscGithub size={40} />
                            </a>
                            <a title='malt.fr' href='https://www.malt.fr/profile/brazillier' target='_blank'>
                                <FaDev size={40} />
                            </a>
                        </div>
                        <Link to='/contact'>
                            <button className='mt-8 rounded-full bg-secondary-100 px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-secondary-200'>
                                Me contacter
                            </button>
                        </Link>
                    </div>
                </div>
                <MyTechnologies />
            </div>

            {!IS_MOBILE && (
                <div className='absolute bottom-5 left-1/2 -ml-[15px] transform animate-bounce hover:cursor-pointer'>
                    <BsArrowDownShort onClick={handleScroll} size={30} />
                </div>
            )}
        </div>
    );
};
