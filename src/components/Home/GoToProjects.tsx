import React from "react";
import { Link } from "react-router-dom";
import { useLangData } from "../../hooks/useLangData";
import { Generics } from "../../Interfaces/IFiles";

export const GoToProjects: React.FC<{}> = () => {
    const generics = useLangData("generics") as Generics | null;

    if (!generics) return null;

    return (
        <div className='pt-6 text-center'>
            <Link to='/portfolio' className='text-xl font-bold'>
                <button className='mx-auto rounded-full bg-secondary-100 px-3 py-1 font-bold text-white hover:bg-secondary-200'>
                    {generics.buttons.goToProjects}
                </button>
            </Link>
        </div>
    );
};
