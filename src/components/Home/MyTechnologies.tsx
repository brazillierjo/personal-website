import React from "react";
import MyTech from "../../data/myTechnologies.json";
import { IMyTechs } from "../../Interfaces/IMyTechs";

export const MyTechnologies: React.FC<{}> = () => {
    const [technologies, setTechnologies] = React.useState<null | IMyTechs[]>(MyTech);

    return (
        <div className='mx-auto flex items-center gap-4 pt-6'>
            {technologies?.map((tech, index) => (
                <div key={index}>
                    <img className='h-10 w-10' src={tech.icon} alt={tech.name} title={tech.name} />
                </div>
            ))}
        </div>
    );
};
