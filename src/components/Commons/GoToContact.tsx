import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useLangData } from "../../hooks/useLangData";
import { Generics } from "../../Interfaces/IFiles";

export const GoToContact: React.FC<{}> = () => {
    const generics = useLangData("generics") as Generics | null;

    if (!generics) return null;

    return (
        <div>
            <h2 className='mb-5 w-fit border-b-2 border-secondary-200 pb-1 text-4xl font-bold'>
                {generics.contactMe.title}
            </h2>
            <div className='flex flex-wrap items-center justify-center gap-4 rounded-xl bg-white px-8 py-6 shadow-xl lg:justify-between lg:px-20'>
                <div>
                    <h3 className='text-center text-xl font-semibold lg:text-left'>{generics.contactMe.subTitle}</h3>
                    <p>{generics.contactMe.subTitle2}</p>
                </div>
                <div>
                    <Link to='/contact'>
                        <BsArrowRightCircleFill className='h-12 w-12 text-secondary-100' />
                    </Link>
                </div>
            </div>
        </div>
    );
};
