import MaltImage from "../../assets/png/malt.png";

export const Reviews: React.FC<{}> = () => {
    return (
        <div className='py-20'>
            <h2 className='mb-5 w-fit border-b-2 border-secondary-200 pb-1 text-4xl font-bold'>Reviews</h2>

            <div className='mx-auto w-full rounded-xl bg-white p-6 text-center shadow-xl'>
                <p>
                    Retrouver mes recommandations et notes directement sur la plateforme{" "}
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
