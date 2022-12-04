import { Link } from "react-router-dom";

export const Header: React.FC<{}> = () => {
    return (
        <div className='flex h-12 items-center justify-between'>
            <Link to='/'>
                <h2 className='text-4xl font-extrabold text-primary'>
                    Johan<span className='text-secondary-100'>.</span>
                </h2>
            </Link>

            <div className='flex h-full items-center gap-5 font-semibold'>
                <Link
                    className='border-secondary-100 transition-all duration-100 hover:border-b-2 hover:text-secondary-100'
                    to='/portfolio'>
                    Portfolio
                </Link>
                <Link
                    className='border-secondary-100 transition-all duration-100 hover:border-b-2 hover:text-secondary-100'
                    to='/contact'>
                    Contact
                </Link>
            </div>
        </div>
    );
};
