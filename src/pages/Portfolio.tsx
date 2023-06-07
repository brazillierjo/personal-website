import React, { useEffect } from "react";
import { img } from "../helpers/ImgToComponent";
import { RxOpenInNewWindow } from "react-icons/rx";
import { useLangData } from "../hooks/useLangData";
import { Generics, ProjectItem } from "../Interfaces/IFiles";

export const Portfolio: React.FC<{}> = () => {
    const data = useLangData("projects") as ProjectItem[] | null;
    const generics = useLangData("generics") as Generics | null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!data || !generics) return null;

    return (
        <div className='py-20'>
            <h1 className='mb-2 w-fit border-b-2 border-secondary-200 text-2xl font-bold'>
                {generics.portfolio.title}
            </h1>
            <p className='mb-8 text-sm text-gray-500'>{generics.portfolio.subTitle}</p>

            <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
                {data &&
                    data.map((item, index) => {
                        return (
                            <div
                                className='flex h-full flex-col rounded-lg bg-white p-6 shadow-xl transition-all duration-150'
                                key={index}>
                                <a href={item.url} target='_blank'>
                                    <div className='mb-6 flex flex-col space-y-4'>
                                        {item.images.map((image, index) => img(index, image))}
                                    </div>
                                    <div className='mb-8'>
                                        <h2 className='text-center text-xl font-bold '>{item.title}</h2>
                                        <p className='text-right text-xs text-gray-500'>{item.startDate}</p>
                                    </div>
                                    <p className='text-justify'>{item.description}</p>
                                </a>

                                <div className='mt-5 flex flex-wrap justify-center gap-2'>
                                    {item.technologies.map((technology, index) => {
                                        return (
                                            <div
                                                className='mr-2 flex h-fit w-fit items-center gap-2  rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-800'
                                                key={index}>
                                                <i className={`${technology.class} text-[25px]`}></i>
                                                <p>{technology.name}</p>
                                            </div>
                                        );
                                    })}
                                </div>

                                {item.url && (
                                    <div className='mx-auto mt-auto'>
                                        <a href={item.url} target='_blank'>
                                            <button className='mt-8 flex gap-1 rounded-full bg-secondary-100 px-5 py-2 font-bold text-white transition-all duration-150 hover:bg-secondary-200'>
                                                {generics.buttons.seeProject} <RxOpenInNewWindow />
                                            </button>
                                        </a>
                                    </div>
                                )}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
