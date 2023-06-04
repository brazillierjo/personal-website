import { Generics } from "../../Interfaces/IFiles";
import MaltImage from "../../assets/png/malt.png";
import { useLangData } from "../../hooks/useLangData";

export const Reviews: React.FC<{}> = () => {
    const generics = useLangData("generics") as Generics | null;

    if (!generics) return null;

    return (
        <div className='py-20'>
            <h2 className='mb-5 w-fit border-b-2 border-secondary-200 pb-1 text-4xl font-bold'>
                {generics.reviews.title}
            </h2>

            <div className='mx-auto w-full rounded-xl bg-white p-6 text-center shadow-xl'>
                <p>
                    {generics.reviews.subTitle}{" "}
                    <a
                        className='text-secondary-100 underline'
                        href='https://www.malt.fr/profile/brazillier?q=brazillier+johan'
                        target='_blank'>
                        malt.fr
                    </a>
                    .
                </p>

                <a href='https://www.malt.fr/profile/brazillier?q=brazillier+johan' target='_blank'>
                    <img src={MaltImage} className='mx-auto mt-8' alt='Statistiques Malt.fr' />
                </a>
            </div>
        </div>
    );
};
