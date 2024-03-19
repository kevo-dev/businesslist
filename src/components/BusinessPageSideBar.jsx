import React from 'react'
import { BsFillMapFill } from 'react-icons/bs'
import { AiOutlineMail } from "react-icons/ai"
import { FaGlobe, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6"

const BusinessPageSideBar = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className=' container rounded-lg border bg-white overflow-hidden'>
                <div className='flex gap-2 items-center p-5 border-b'>
                    <BsFillMapFill className=' text-red-500' /> Business Info
                </div>
                <div className='flex flex-col text-sm text-gray-600 p-2'>

                    <div className='p-3 flex gap-2 items-center'>
                        <div className='bg-red-100 rounded-full p-3 text-lg'>
                            <AiOutlineMail className='text-red-500' />
                        </div>
                        <p>info@example.com</p>
                    </div>

                    <div className='p-3 flex gap-2 items-center'>
                        <div className='bg-red-100 rounded-full p-3 text-lg'>
                            <FaPhone className='text-red-500' />
                        </div>
                        <p>+91 1 234 5648</p>
                    </div>

                    <div className='p-3 flex gap-2 items-center'>
                        <div className='bg-red-100 rounded-full p-3 text-lg'>
                            <FaGlobe className='text-red-500' />
                        </div>
                        <p>https://bizmap.dexignzone.com</p>
                    </div>

                    <div className='p-3 flex gap-2 items-center'>
                        <div className='bg-red-100 rounded-full p-3 text-lg'>
                            <FaLocationDot className='text-red-500' />
                        </div>
                        <p>New York, USA</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BusinessPageSideBar