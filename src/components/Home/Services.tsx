import { Link } from "react-router-dom";

export const Services: React.FC<{}> = () => {
    return (
        <div className='pb-5'>
            <h2 className='mb-5 w-fit border-b-2 border-secondary-200 pb-1 text-4xl font-bold'>Mes services</h2>
            <div className='grid gap-4 md:grid-cols-3'>
                <div className='rounded-lg bg-green-500 p-5 text-center text-white'>
                    <img src='' alt='' />
                    <h3 className='mb-3 text-xl font-semibold'>Développement Web</h3>
                    <p>Création, édition, maintenance de projets web</p>
                </div>
                <div className='rounded-lg bg-orange-400 p-5 text-center text-white'>
                    <img src='' alt='' />
                    <h3 className='mb-3 text-xl font-semibold'>UI/UX Design</h3>
                    <p>Proposition de templates en flat/modern design</p>
                </div>
                <div className='rounded-lg bg-blue-800 p-5 text-center text-white'>
                    <img src='' alt='' />
                    <h3 className='text-xl font-semibold'>WordPress</h3>
                    <p>Création, édition, maintenance de projets web avec WordPress</p>
                </div>
            </div>
            <Link to='/contact'>
                <p className='mt-5 text-center'>Un de ces services vous intéresse ? Cliquez-ici pour me contacter 👏</p>
            </Link>
        </div>
    );
};
