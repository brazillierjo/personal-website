import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { RiCheckDoubleLine } from "react-icons/ri";
import { useLangData } from "../../hooks/useLangData";
import { AboutMeItem } from "../../Interfaces/IFiles";

export const AboutMe: React.FC<{}> = () => {
    const data = useLangData("aboutMe") as AboutMeItem[] | null;
    const [showMoreAboutMe, setShowMoreAboutMe] = useState(false);

    const handleReadMore = () => {
        setShowMoreAboutMe(!showMoreAboutMe);
    };

    if (!data) return <div>Erreur de chargement</div>;

    return (
        <div id='about-me' className='py-4'>
            <h2 className='mb-5 w-fit border-b-2 border-secondary-200 pb-1 text-4xl font-bold'>À propos de moi</h2>

            <div className='flex w-full flex-wrap justify-between'>
                <div className='w-full md:w-7/12'>
                    <div className='mt-5 flex flex-col space-y-4'>
                        {data.map((item, index) => {
                            if (!item.isInReadMore) {
                                return (
                                    <div key={index} className='flex gap-3'>
                                        <div>{item.emoji}</div>
                                        <p>{item.text}</p>
                                    </div>
                                );
                            }
                        })}

                        {!showMoreAboutMe && (
                            <small className='ml-7 flex items-center hover:cursor-pointer' onClick={handleReadMore}>
                                En savoir plus... <HiChevronDown />
                            </small>
                        )}

                        {showMoreAboutMe && (
                            <>
                                {data.map((item, index) => {
                                    if (item.isInReadMore) {
                                        return (
                                            <div key={index} className='flex gap-3'>
                                                <div>{item.emoji}</div>
                                                <p>{item.text}</p>
                                            </div>
                                        );
                                    }
                                })}
                            </>
                        )}

                        {showMoreAboutMe && (
                            <small className='ml-7 flex items-center hover:cursor-pointer' onClick={handleReadMore}>
                                Refermer <HiChevronUp />
                            </small>
                        )}
                    </div>
                </div>
                <div className='mt-6 flex w-full flex-col space-y-4 md:mt-0 md:w-3/12'>
                    <div className='flex items-center gap-3'>
                        <RiCheckDoubleLine className='text-green-500' size={25} />
                        <span>Dévelopement frontend</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiCheckDoubleLine className='text-orange-500' size={25} />
                        <span>Dévelopement backend</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiCheckDoubleLine className='text-yellow-500' size={25} />
                        <span>UX/UI</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiCheckDoubleLine className='text-red-500' size={25} />
                        <span>Référencement</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiCheckDoubleLine className='text-blue-500' size={25} />
                        <span>Optimisation</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
