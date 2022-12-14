import React, { useEffect } from "react";
import data from "../data/projects.json";
import { img } from "../helpers/ImgToComponent";
import { IProjects } from "../Interfaces/IProjects";
import { RxOpenInNewWindow } from "react-icons/rx";

export const Portfolio: React.FC<{}> = () => {
    const [projects, setProjects] = React.useState<null | IProjects[]>(data);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='py-20'>
            <h1 className='mb-2 w-fit border-b-2 border-secondary-200 text-2xl font-bold'>Mes projets</h1>
            <p className='mb-8 text-sm text-gray-500'>
                ⚠️ Ces projets sont mes projets personnels. Mes projets professionnels ne peuvent évidemment pas être
                affichés ici pour des raisons de droits.
            </p>

            <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
                {projects &&
                    projects.map((project, index) => {
                        return (
                            <div
                                className='flex h-full flex-col rounded-lg bg-white p-6 shadow-xl transition-all duration-150'
                                key={index}>
                                <a href={project.url} target='_blank'>
                                    <div className='mb-6 flex flex-col space-y-4'>
                                        {project.images.map((image, index) => img(index, image))}
                                    </div>
                                    <div className='mb-8'>
                                        <h2 className='text-center text-xl font-bold '>{project.title}</h2>
                                        <p className='text-right text-xs text-gray-500'>{project.startDate}</p>
                                    </div>
                                    <p className='text-justify'>{project.description}</p>
                                </a>

                                <div className='mt-5 flex flex-wrap justify-center gap-2'>
                                    {project.technologies.map((technology, index) => {
                                        return (
                                            <div
                                                className='mr-2 flex h-fit w-fit items-center gap-2  rounded-full bg-gray-200 py-1 px-2 text-xs font-semibold text-gray-800'
                                                key={index}>
                                                <i className={`${technology.class} text-[25px]`}></i>
                                                <p>{technology.name}</p>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className='mx-auto mt-auto'>
                                    <a href={project.url} target='_blank'>
                                        <button className='mt-8 flex gap-1 rounded-full bg-secondary-100 px-5 py-2 font-bold text-white transition-all duration-150 hover:bg-secondary-200'>
                                            Voir le projet <RxOpenInNewWindow />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
