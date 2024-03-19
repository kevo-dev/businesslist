import Link from 'next/link';
import React from 'react';
import { FaAngleRight, FaHeart, FaLocationArrow, FaStar } from 'react-icons/fa';


const BusinessCard = ({ data }) => {
    const { thumbnail, name, category } = data;

    return (
        <div className="w-full h-full rounded-lg flex flex-col bg-white overflow-hidden border">
            <div className=' relative bg-black h-[230px]'>
                <img
                    className="w-full h-full object-cover opacity-70"
                    src={thumbnail}
                    alt="Business Owner"
                />
                <div className=' absolute bottom-0 left-0 w-full flex items-center justify-between py-3 px-2'>
                    <button className=' text-white rounded-full p-2 bg-black bg-opacity-80'><FaHeart /></button>
                    <Ratings />
                </div>
                <div className=' absolute top-0 left-0 bg-green-600 text-white p-2 uppercase text-sm'>
                    {category}
                </div>
            </div>

            <div className="flex flex-col gap-3 px-3 py-5">
                <h2 className="text-lg font-semibold text-gray-800 capitalize">{name}</h2>
                <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.
                </p>
            </div>
            <hr />
            <div className='p-3 flex justify-between items-center text-sm'>
                <div className=' inline-block text-gray-500'>
                    <FaLocationArrow className='mr-2 inline-block text-red-400' />
                    12/a, New
                </div>
                <Link href={"/business/1"} className=' bg-transparent p-2 rounded-lg text-green-500 flex items-center gap-2'>
                    Open now <FaAngleRight />
                </Link>
            </div>
        </div>
    );
};

const Ratings = () => {
    return (
        <div className="flex items-center space-x-1 text-gray-600 text-lg">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
        </div>
    )
}

export default BusinessCard;
