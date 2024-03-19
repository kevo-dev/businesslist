import React from 'react'

const SectionBox = ({ title, description }) => {
    return (
        <div className='max-w-[700px] w-full mx-auto text-center flex flex-col items-center gap-5 py-12'>
            <h1 className='text-2xl md:text-3xl font-semibold'>{title}</h1>
            <hr className=' border-4 border-red-400 w-10' />
            <p className=' text-gray-500'>{description}</p>
        </div>
    )
}

export default SectionBox