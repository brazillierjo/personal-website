import { GiDiploma } from "react-icons/gi";
import { EducationItem } from "../../Interfaces/IFiles";
import { useLangData } from "../../hooks/useLangData";

export const Education: React.FC<{}> = () => {
    const data = useLangData("education") as EducationItem[] | null;

    return (
        <div className='w-full rounded-xl bg-white p-6'>
            <h3 className='mb-5 text-xl font-semibold'>Mon parcours scolaire</h3>

            <div>
                {data &&
                    data.map((experience: EducationItem, index) => (
                        <div className='relative flex gap-3 py-3' key={index}>
                            <GiDiploma className='text-secondary-200' size={20} />
                            <div className='absolute left-2 top-10 h-[60%] w-[2px] bg-gray-300' />
                            <div>
                                <p className='text-gray-500'>{experience.years}</p>
                                <h2>{experience.title}</h2>
                                <h3 className='text-gray-500'>{experience.company}</h3>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
