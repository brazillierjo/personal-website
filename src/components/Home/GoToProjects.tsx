import React from "react";
import { Link } from "react-router-dom";

export const GoToProjects: React.FC<{}> = () => {
    return (
        <div className='pt-6 text-center'>
            <Link to='/portfolio' className='text-xl font-bold'>
                <button className='mx-auto rounded-full bg-secondary-100 px-3 py-1 font-bold text-white hover:bg-secondary-200'>
                    Voir mes projets
                </button>
            </Link>
        </div>
    );
};
