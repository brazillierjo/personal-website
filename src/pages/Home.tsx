import { useEffect } from "react";
import { GoToContact } from "../components/Commons/GoToContact";
import { AboutMe } from "../components/Home/AboutMe";
import { Education } from "../components/Home/Education";
import { Experiences } from "../components/Home/Experiences";
import { Main } from "../components/Home/Main";
import { Reviews } from "../components/Home/Reviews";
import { Services } from "../components/Home/Services";

export const Home: React.FC<{}> = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Main />
            <AboutMe />
            <div className='py-20'>
                <h2 className='mb-5 w-fit border-b-2 border-secondary-200 pb-1 text-4xl font-bold'>
                    Expériences & Diplômes
                </h2>
                <div className='grid gap-10 md:grid-cols-2 md:justify-between'>
                    <Experiences />
                    <Education />
                </div>
            </div>
            <Services />
            <Reviews />
            <GoToContact />
        </>
    );
};
