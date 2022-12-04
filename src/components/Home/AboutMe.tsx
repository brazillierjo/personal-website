import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { RiCheckDoubleLine } from "react-icons/ri";

export const AboutMe: React.FC<{}> = () => {
    const [showMoreAboutMe, setShowMoreAboutMe] = useState(false);

    const handleReadMore = () => {
        setShowMoreAboutMe(!showMoreAboutMe);
    };

    return (
        <div className='py-4'>
            <h2 className='pb-5 text-4xl font-bold'>À propos de moi</h2>

            <div className='flex w-full flex-wrap justify-between'>
                <div className='w-full lg:w-7/12'>
                    <div className='mt-5 flex flex-col space-y-4'>
                        <p>👋 Bonjour</p>
                        <p>
                            🧘‍♂️ - Moi c'est Johan. Développeur Web depuis 2020, j'aime travailler avec React & WordPress.
                            J'adore intégrer des maquettes de tous style, rendre dynamique et intéractif un site web
                            pour maximiser l'expérience utilisateur.
                        </p>

                        <p>
                            🤝 - Vous vous trouvez actuellement sur mon site portfolio. Jetez un oeil, ça vous donnera
                            une idée de ce que je peux faire pour vous aider.
                        </p>

                        {!showMoreAboutMe && (
                            <small className='flex items-center hover:cursor-pointer' onClick={handleReadMore}>
                                En savoir plus... <HiChevronDown />
                            </small>
                        )}

                        {showMoreAboutMe && (
                            <>
                                <p>
                                    📚 - J'ai d'abord arrêté les études après un Baccalauréat Technologique. De petits
                                    boulots en petits boulots, j'ai rapidement compris que ce contexte ne me suffirait
                                    pas. J'ai donc repris mes études à 21 ans pour une licence en e-commerce.
                                </p>
                                <p>
                                    🏋️ - Ces études m'ont permis d'exercer pendant 6 ans en tant que SEO. Cette
                                    expérience m'a appris le fonctionnement du monde professionnel, le travail en équipe
                                    ainsi que le poids des responsabilités mais également la gestion d'un back office et
                                    d'un référencement naturel.
                                </p>
                                <p>
                                    🍀 - En tant que SEO, travailler en étroite collaboration avec des développeurs m'a
                                    donné envie de me plonger dans ce monde très technique. Je me suis donc offert une
                                    formation bootcamp de 6 mois pour acquérir les bases de la programmation web et de
                                    l'écriture de code. Suite à cela, j'ai poursuivi mon apprentissage en alternance
                                    avec une Licence Intégrateur/Développeur d'Applications Web et mobile avec
                                    spécialité React et NodeJs.
                                </p>
                                <p>
                                    🍾 - Depuis, j'ai intégré pas mal d'entreprises pour des intégrations complètes, des
                                    coups de mains pour livrer un projet à temps, apporter des modifications, ajouter
                                    des fonctionnalités... Aujourd'hui, je suis développeur à temps plein.
                                </p>
                            </>
                        )}

                        {showMoreAboutMe && (
                            <small className='flex items-center hover:cursor-pointer' onClick={handleReadMore}>
                                Refermer <HiChevronUp />
                            </small>
                        )}
                    </div>
                </div>
                <div className='mt-6 flex w-full flex-col space-y-4 lg:mt-0 lg:w-3/12'>
                    <div className='flex items-center gap-3'>
                        <RiCheckDoubleLine className='text-green-500' size={25} />
                        <span>Dévelopement frontend</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiCheckDoubleLine className='text-orange-500' size={25} />
                        <span>Dévelopement backend</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiCheckDoubleLine className='text-yellow-500' size={25} />
                        <span>UX/UI</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
