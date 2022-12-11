import React from "react";
import MyTech from "../../data/myTechnologies.json";
import { IMyTechs } from "../../Interfaces/IMyTechs";

export const MyTechnologies: React.FC<{}> = () => {
    const [technologies, setTechnologies] = React.useState<null | IMyTechs[]>(MyTech);

    return (
        <div className='mx-auto flex flex-wrap items-center justify-center gap-4 pt-12'>
            {technologies?.map((tech, index) => (
                <div key={index}>
                    <i title={tech.name} className={`${tech.icon} text-[40px]`}></i>
                </div>
            ))}
        </div>
    );
};
