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

            <div className='flex flex-col gap-0 text-center lg:text-left'>
                <h3 className='text-center text-2xl uppercase lg:text-left lg:text-4xl'>
                    {generics.contactMe.subTitle}
                </h3>

                <Link className='custom-btn rounded text-2xl' to={socialLinks.email.url}>
                    {generics.contactMe.button}
                </Link>

                <SocialLinks withoutEmail />
            </div>
        </>
    );
};
