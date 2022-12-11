import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs"
import { Link } from 'react-router-dom'

export const GoToContact: React.FC<{}> = () => {
    return (
        <div>
            <h2 className='mb-5 w-fit border-b-2 border-secondary-200 pb-1 text-4xl font-bold'>Me contacter</h2>
            <div className='flex flex-wrap items-center justify-between rounded-xl bg-white py-6 px-8 shadow-xl lg:px-20'>
                <div>
                    <h3 className='text-xl font-semibold'>Vous souhaitez me contacter ?</h3>
                    <p>Ce sera un plaisir d'échanger !</p>
                </div>
                <div>
                    <Link to='/contact'>
                        <BsArrowRightCircleFill className='h-12 w-12 text-secondary-100' />
                    </Link>
                </div>
            </div>
        </div>
    );
}
