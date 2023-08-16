import { MdWork } from "react-icons/md";
import { useLangData } from "../hooks/useLangData";
import { ExperienceItem, Generics } from "../Interfaces/IFiles";

export const Experiences = () => {
    const data = useLangData("experiences") as ExperienceItem[] | null;
    const generics = useLangData("generics") as Generics | null;

    if (!data || !generics) return null;

    return (
        <div className='w-full rounded-xl bg-white p-6'>
            <h3 className='mb-5 text-xl font-semibold'>{generics.experiences.professionalPath}</h3>

            {data &&
                data.map((experience: ExperienceItem, index) => (
                    <div className='relative flex gap-3 py-3' key={index}>
                        <MdWork className='text-secondary-200' size={20} />
                        <div className='absolute left-2 top-10 h-[60%] w-[2px] bg-gray-300' />

                        <div className='grid grid-cols-2 w-full'>
                            <div>
                                <p className='text-gray-500'>{experience.years}</p>
                                <h2>{experience.title}</h2>
                                <h3 className='text-gray-500'>{experience.company}</h3>

                                <div>
                                    {experience.technologies && (
                                        <ul>
                                            {experience.technologies.map((technology: string, index) => (
                                                <li key={index} className='text-gray-500 text-xs'>
                                                    ↪ {technology}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};
