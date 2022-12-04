import data from "../../data/experiences.json";
import { MdWork } from "react-icons/md";
import { IExperiences } from "../../Interfaces/IExperiences";

const Experience = () => {
    return (
        <>
            {data.map((experience: IExperiences) => (
                <div className='relative flex gap-3 py-3' key={experience.company}>
                    <MdWork className='text-secondary-200' size={20} />
                    <div className='absolute left-2 top-10 h-[60%] w-[2px] bg-gray-300' />
                    <div>
                        <p className='text-gray-500'>{experience.years}</p>
                        <h2>{experience.title}</h2>
                        <h3 className='text-gray-500'>{experience.company}</h3>
                        <p className='text-gray-500'>{experience?.description}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export const Experiences: React.FC<{}> = () => {
    return (
        <div className='w-full rounded-xl bg-white p-6'>
            <h3 className='mb-5 text-xl font-semibold'>Mon parcours professionnel</h3>
            <Experience />
        </div>
    );
};
