import { AboutMe } from "../components/Home/AboutMe";
import { Education } from "../components/Home/Education";
import { Experiences } from "../components/Home/Experiences";
import { Main } from "../components/Home/Main";
import { Reviews } from "../components/Home/Reviews";
import { Services } from "../components/Home/Services";

export const Home: React.FC<{}> = () => {
    return (
        <>
            <Main />
            <AboutMe />
            <div className='py-20'>
                <h2 className='pb-5 text-4xl font-bold'>Expériences & Diplômes</h2>
                <div className='grid gap-10 lg:grid-cols-2 lg:justify-between'>
                    <Experiences />
                    <Education />
                </div>
            </div>
            <Services />
            <Reviews />
        </>
    );
};
