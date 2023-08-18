import { Link } from "react-router-dom";
import { useLangData } from "../../hooks/useLangData";
import { Generics } from "../../Interfaces/IFiles";
import socialLinks from "../../data/socialLinks.json";
import SocialLinks from "./SocialLinks";

export const Contact = () => {
    const generics = useLangData("generics") as Generics | null;

    if (!generics) return null;

    return (
        <div id='contact'>
            <h2 className='mb-5 w-fit pb-1 text-3xl font-bold'>{generics.contactMe.title}</h2>

            <div className='flex flex-col gap-8'>
                <h3 className='text-center text-2xl uppercase lg:text-left lg:text-4xl'>
                    {generics.contactMe.subTitle}
                </h3>

                <div className='text-right lg:text-left'>
                    <Link className='custom-btn rounded text-lg md:text-2xl' to={socialLinks.email.url}>
                        {generics.contactMe.button}
                    </Link>
                </div>

                <SocialLinks withoutEmail />
            </div>
        </div>
    );
};
