import data from "../../data/fr/education.json";
import { IEducation } from "../../Interfaces/IEducation";
import { GiDiploma } from "react-icons/gi";

export const Education: React.FC<{}> = () => {
    const Education = () => {
        return (
            <>
                {data.map((experience: IEducation) => (
                    <div className='relative flex gap-3 py-3' key={experience.company}>
                        <GiDiploma className='text-secondary-200' size={20} />
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

    return (
        <div className='w-full rounded-xl bg-white p-6'>
            <h3 className='mb-5 text-xl font-semibold'>Mon parcours scolaire</h3>
            <Education />
        </div>
    );
};
