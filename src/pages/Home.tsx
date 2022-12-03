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
            <div className='lg:flex lg:justify-evenly'>
                <Experiences />
                <Education />
            </div>
            <Services />
            <Reviews />
        </>
    );
};
