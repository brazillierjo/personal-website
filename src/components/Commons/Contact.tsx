import { Link } from "react-router-dom";
import { useLangData } from "../../hooks/useLangData";
import { Generics } from "../../Interfaces/IFiles";
import socialLinks from "../../data/socialLinks.json";
import SocialLinks from "./SocialLinks";

export const Contact = () => {
    const generics = useLangData("generics") as Generics | null;

    if (!generics) return null;

    return (
        <>
            <h2 className='mb-5 w-fit pb-1 text-3xl font-bold'>{generics.contactMe.title}</h2>

            <div className='text-center flex flex-col gap-0 lg:text-left'>
                <h3 className='text-2xl lg:text-4xl text-center uppercase lg:text-left'>
                    {generics.contactMe.subTitle}
                </h3>

                <Link className='rounded custom-btn text-2xl' to={socialLinks.email.url}>
                    {generics.contactMe.button}
                </Link>

                <SocialLinks withoutEmail />
            </div>
        </>
    );
};
