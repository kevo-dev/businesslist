import React from 'react'
import { FaHeart, FaLocationArrow, FaPhone, FaSearchLocation, FaStar } from 'react-icons/fa'
import { SlUserFollowing } from "react-icons/sl"
import { BsThreeDots } from "react-icons/bs"

const BusinessPageBanner = () => {
    const image = "https://images.pexels.com/photos/163037/london-street-phone-cabin-163037.jpeg?auto=compress&cs=tinysrgb&w=1600"
    return (
        <div>
            <div className='h-[250px] md:h-[350px] relative bg-black'>
                <img src={image} alt="banner" className=' object-cover h-full w-full opacity-20' />
                <div className='flex w-full  p-5 absolute bottom-0 left-0 text-white'>
                    <div className='flex gap-5 justify-between items-center max-w-[1200px] mx-auto w-full'>
                        <div>
                            <div className='flex items-center gap-2 text-xs md:text-sm mb-2'>
                                <FaLocationArrow className=' text-red-500' /> New York, USA
                            </div>
                            <div className='flex items-center gap-2 text-xs md:text-sm'>
                                <FaPhone className=' text-red-500' /> +123 123 123
                            </div>
                        </div>
                        <div>
                            <button className=' rounded-sm p-2 bg-red-500 text-white mb-2 text-sm'>
                                Write Review
                            </button>
                            <div className="flex items-center space-x-1 text-gray-600 text-xs md:text-lg">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' p-5 bg-white w-full'>
                <div className=' container mx-auto max-w-[1200px] flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <img src={image} alt="image" className=' rounded-xl h-16 w-16 object-cover' />
                        <div>
                            <h1>USA LTD.</h1>
                            <span className=' text-sm text-gray-600'>IT Consultant</span>
                        </div>
                    </div>
                    <div className=' flex gap-4 items-center text-xs md:text-lg '>
                        <button className=' bg-red-500 rounded-sm text-white p-2 flex gap-2 items-center '>
                            Save <FaHeart />
                        </button>
                        <button className=' text-red-500 rounded-sm border border-red-500 p-2 flex gap-2 items-center '>
                            Follow <SlUserFollowing />
                        </button>
                        <button className='p-2'>
                            <BsThreeDots />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessPageBanner