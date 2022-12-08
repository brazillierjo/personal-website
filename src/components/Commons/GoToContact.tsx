import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs"
import { Link } from 'react-router-dom'

export const GoToContact: React.FC<{}> = () => {
    return (
        <div className='bg-white py-6 px-8 lg:px-20 rounded-xl shadow-xl flex flex-wrap justify-between items-center'>
            <div>
                <h3 className='font-semibold text-xl'>Vous souhaitez me contacter ?</h3>
                <p>Ce sera un plaisir d'échanger !</p>
            </div>
            <div>
                <Link to="/contact">
                    <BsArrowRightCircleFill className="text-secondary-100 h-12 w-12" />
                </Link>
            </div>
        </div>
    )
}
