import ContactBanner from "../assets/png/contact.png"

export const Contact: React.FC<{}> = () => {
    return (
        <div className="py-20">

            <div className="px-5 flex flex-col space-y-5">

                <h1 className="font-bold text-3xl">Contact</h1>

                <p>Si vous souhaitez me contacter pour discuter d'un projet de développement ou obtenir de plus amples informations sur mes services, veuillez me contacter via l'un des services ci-dessous.</p>

                <p>Expérimenté et passionné, je serai heureux de vous aider à faire avancer votre projet.</p>

                <div className="flex flex-wrap justify-evenly space-y-5 lg:space-y-0 pt-12">
                    <div className="bg-white flex flex-col space-y-5 text-center p-6 rounded-lg shadow-xl">
                        <p>Me contacter par mail</p>
                        <button className="text-white font-semibold px-6 py-2 bg-secondary-100 hover:bg-secondary-200 transition-all duration-100 rounded-full">
                            <a href="mailto:j.brazillier@gmail.com">j.brazillier@gmail.com</a>
                        </button>
                    </div>
                    <div className="bg-white flex flex-col space-y-5 text-center p-6 rounded-lg shadow-xl">
                        <p>Me contacter via Linkedin</p>
                        <button className="text-white font-semibold px-6 py-2 bg-secondary-100 hover:bg-secondary-200 transition-all duration-100 rounded-full">
                            <a href='https://www.linkedin.com/in/johan-r-brazillier-9b917a174/' target='_blank'>LinkedIn</a>
                        </button>
                    </div>
                    <div className="bg-white flex flex-col space-y-5 text-center p-6 rounded-lg shadow-xl">
                        <p>Me contacter via Malt</p>
                        <button className="text-white font-semibold px-6 py-2 bg-secondary-100 hover:bg-secondary-200 transition-all duration-100 rounded-full">
                            <a href="https://www.malt.fr/profile/brazillier" target="_blank">malt.fr</a>
                        </button>
                    </div>
                </div>

            </div>

            <img src={ContactBanner} className="lg:h-[400px] w-full lg:w-auto mx-auto mt-12" alt="Bannière target" />

        </div>
    )
}
