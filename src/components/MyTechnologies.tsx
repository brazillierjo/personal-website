import React from "react";

import MyTech from "../data/myTechnologies.json";
import { IMyTechs } from "../Interfaces/IMyTechs";

/**
 * Renders a list of technologies.
 *
 * @return {ReactNode} The rendered list of technologies.
 */
export const MyTechnologies: React.FC<{}> = () => {
  const [technologies, _] = React.useState<null | IMyTechs[]>(MyTech);

  return (
    <div className="mx-auto flex flex-wrap items-center justify-center gap-4">
      {technologies?.map((tech, index) => (
        <div key={index}>
          <i title={tech.name} className={`${tech.icon} text-[40px]`}></i>
        </div>
      ))}
    </div>
  );
};
