import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { RiCheckDoubleLine } from "react-icons/ri";
import { useLangData } from "../hooks/useLangData";
import { AboutMeItem, Generics } from "../Interfaces/IFiles";

export const AboutMe: React.FC<{}> = () => {
    const data = useLangData("aboutMe") as AboutMeItem[] | null;
    const generics = useLangData("generics") as Generics | null;

    const [showMoreAboutMe, setShowMoreAboutMe] = useState(false);

    const handleReadMore = () => {
        setShowMoreAboutMe(!showMoreAboutMe);
    };

    if (!data || !generics) return <div>Erreur de chargement</div>;

    return (
        <div id='about-me' className='py-4'>
            <h2 className='mb-5 w-fit pb-1 text-3xl font-bold'>{generics.aboutMe.title}</h2>

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
                                {generics.buttons.readMore} <HiChevronDown />
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
                                {generics.buttons.close} <HiChevronUp />
                            </small>
                        )}
                    </div>
                </div>
                <div className='mt-6 flex w-full flex-col space-y-4 md:mt-0 md:w-3/12'>
                    <div className='flex items-center gap-3'>
                        <RiCheckDoubleLine className='text-green-500' size={25} />
                        <span>{generics.aboutMe.firstSkill}</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiCheckDoubleLine className='text-orange-500' size={25} />
                        <span>{generics.aboutMe.secondSkill}</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiCheckDoubleLine className='text-yellow-500' size={25} />
                        <span>{generics.aboutMe.thirdSkill}</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiCheckDoubleLine className='text-red-500' size={25} />
                        <span>{generics.aboutMe.fourthSkill}</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiCheckDoubleLine className='text-blue-500' size={25} />
                        <span>{generics.aboutMe.fifthSkill}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
