import { useEffect } from "react";
import ContactBanner from "../assets/png/contact.png";
import Malt from "../assets/png/maltLogo.png";
import Linkedin from "../assets/png/linkedin.png";
import Mail from "../assets/png/mail.png";

export const Contact: React.FC<{}> = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='py-20'>
            <div className='flex flex-col space-y-5 px-5'>
                <h1 className='text-3xl font-bold'>Contact</h1>

                <p>
                    Si vous souhaitez me contacter pour discuter d'un projet de développement ou obtenir de plus amples
                    informations sur mes services, veuillez me contacter via l'un des services ci-dessous.
                </p>

                <p>Expérimenté et passionné, je serai heureux de vous aider à faire avancer votre projet.</p>

                <div className='flex flex-wrap justify-evenly gap-10 pt-12'>
                    <div className='flex h-[130px] rounded-lg bg-white text-center shadow-xl lg:h-[230px]'>
                        <div className='flex flex-col justify-center space-y-5 p-6'>
                            <p>Me contacter par mail</p>
                            <button className='rounded-full bg-secondary-100 px-6 py-2 font-semibold text-white transition-all duration-100 hover:bg-secondary-200'>
                                <a href='mailto:j.brazillier@gmail.com' target='_blank'>
                                    j.brazillier@gmail.com
                                </a>
                            </button>
                        </div>
                        <img className='hidden rounded-lg lg:block' src={Mail} alt='Mail' />
                    </div>

                    <div className='flex h-[130px] rounded-lg bg-white text-center shadow-xl lg:h-[230px]'>
                        <div className='flex flex-col justify-center space-y-5 p-6'>
                            <p>Me contacter via LinkedIn</p>
                            <button className='rounded-full bg-secondary-100 px-6 py-2 font-semibold text-white transition-all duration-100 hover:bg-secondary-200'>
                                <a href='https://www.linkedin.com/in/johan-r-brazillier-9b917a174/' target='_blank'>
                                    linkedin.fr
                                </a>
                            </button>
                        </div>
                        <img className='hidden rounded-lg lg:block' src={Linkedin} alt='LinkedIn' />
                    </div>

                    <div className='flex h-[130px] rounded-lg bg-white text-center shadow-xl lg:h-[230px]'>
                        <div className='flex flex-col justify-center space-y-5 p-6'>
                            <p>Me contacter via Malt</p>
                            <button className='rounded-full bg-secondary-100 px-6 py-2 font-semibold text-white transition-all duration-100 hover:bg-secondary-200'>
                                <a href='https://www.malt.fr/profile/brazillier' target='_blank'>
                                    malt.fr
                                </a>
                            </button>
                        </div>
                        <img className='hidden rounded-lg lg:block' src={Malt} alt='Malt' />
                    </div>
                </div>
            </div>

            <img src={ContactBanner} className='mx-auto mt-12 w-full lg:h-[400px] lg:w-auto' alt='Bannière target' />
        </div>
    );
};
