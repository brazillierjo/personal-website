import { useEffect } from "react";
import ContactBanner from "../assets/png/contact.png";
import Malt from "../assets/png/maltLogo.png";
import Linkedin from "../assets/png/linkedin.png";
import Mail from "../assets/png/mail.png";
import { useLangData } from "../hooks/useLangData";
import { ContactPage } from "../Interfaces/IFiles";

export const Contact: React.FC<{}> = () => {
    const data = useLangData("contact") as ContactPage | null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!data) return null;

    return (
        <div className='py-20'>
            <div className='flex flex-col space-y-5 px-5'>
                <h1 className='text-3xl font-bold'>{data.title}</h1>

                <p>{data.description}</p>

                <p>{data.description2}</p>

                <div className='flex flex-wrap justify-evenly gap-5 pt-12'>
                    <div className='flex h-[120px] rounded-lg bg-white text-center shadow-xl'>
                        <img className='hidden rounded-lg lg:block' src={Mail} alt='Mail' />
                        <div className='flex flex-col justify-center space-y-5 p-6'>
                            <p>{data.mailContact}</p>
                            <button className='rounded-full bg-secondary-100 px-6 py-2 font-semibold text-white transition-all duration-100 hover:bg-secondary-200'>
                                <a href='mailto:j.brazillier@gmail.com' target='_blank'>
                                    j.brazillier@gmail.com
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className='flex h-[120px] rounded-lg bg-white text-center shadow-xl'>
                        <img className='hidden rounded-lg lg:block' src={Linkedin} alt='LinkedIn' />
                        <div className='flex flex-col justify-center space-y-5 p-6'>
                            <p>{data.linkedInContact}</p>
                            <button className='rounded-full bg-secondary-100 px-6 py-2 font-semibold text-white transition-all duration-100 hover:bg-secondary-200'>
                                <a href='https://www.linkedin.com/in/johan-r-brazillier-9b917a174/' target='_blank'>
                                    linkedin.fr
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className='flex h-[120px] rounded-lg bg-white text-center shadow-xl'>
                        <img className='hidden rounded-lg lg:block' src={Malt} alt='Malt' />
                        <div className='flex flex-col justify-center space-y-5 p-6'>
                            <p>{data.maltContact}</p>
                            <button className='rounded-full bg-secondary-100 px-6 py-2 font-semibold text-white transition-all duration-100 hover:bg-secondary-200'>
                                <a href='https://www.malt.fr/profile/brazillier' target='_blank'>
                                    malt.fr
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <img src={ContactBanner} className='mx-auto mt-12 w-full lg:h-[400px] lg:w-auto' alt='Bannière target' />
        </div>
    );
};
