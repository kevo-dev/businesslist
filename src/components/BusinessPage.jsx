import React from 'react'
import { FaHome, FaImage, FaPaperclip, FaPhoneAlt, FaPhotoVideo, FaStar, FaUser, FaUsers } from 'react-icons/fa'
import BusinessPageSideBar from './BusinessPageSideBar'

const BusinessPage = () => {
    return (
        <div className=' second-bg'>
            <header className=' bg-red-500 text-white'>
                <div className='flex items-center max-w-[1200px] mx-auto overflow-x-auto capitalize font-light'>
                    <button className='p-3 flex items-center gap-2 bg-white bg-opacity-20'>
                        <FaHome /> Home
                    </button>
                    <button className='p-3 flex items-center gap-2'>
                        <FaStar /> Reviews
                    </button>
                    <button className='p-3 flex items-center gap-2'>
                        <FaPhotoVideo />Photos
                    </button>
                    <button className='p-3 flex items-center gap-2'>
                        <FaUser />About
                    </button>
                </div>
            </header>
            <div className=' container max-w-[1200px] mx-auto p-5 flex gap-4 flex-col md:flex-row'>
                <div className='max-w-[800px] w-full '>
                    <FirstSlide />
                </div>
                <div className='flex-1'>
                    <BusinessPageSideBar />
                </div>
            </div>
        </div>
    )
}

const FirstSlide = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className=' container rounded-lg border bg-white overflow-hidden'>
                <div className='flex gap-2 items-center p-5 border-b'>
                    <FaPaperclip className=' text-red-500' /> About
                </div>
                <div className='p-5 text-gray-700 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam autem dignissimos cumque reprehenderit ipsum alias excepturi at esse sapiente, impedit, officiis iusto quaerat fugit eos eius eaque sunt? Velit?
                </div>
            </div>

            <div className=' container rounded-lg border bg-white overflow-hidden'>
                <div className='flex gap-2 items-center p-5 border-b'>
                    <FaPhotoVideo className=' text-red-500' /> Photos
                </div>
                <div className='p-5 grid grid-cols-2 md:grid-cols-4 gap-4'>
                    <img
                        className=' rounded-md border overflow-hidden object-cover h-full w-full'
                        src={"https://images.pexels.com/photos/163037/london-street-phone-cabin-163037.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                        alt="image"
                    />
                    <img
                        className=' rounded-md border overflow-hidden object-cover h-full w-full'
                        src={"https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                        alt="image"
                    />
                    <img
                        className=' rounded-md border overflow-hidden object-cover h-full w-full'
                        src={"https://images.pexels.com/photos/51363/london-tower-bridge-bridge-monument-51363.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                        alt="image"
                    />
                    <img
                        className=' rounded-md border overflow-hidden object-cover h-full w-full'
                        src={"https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                        alt="image"
                    />
                </div>
                <div className='p-5 border-t flex justify-center text-red-500'>
                    <button>See More...</button>
                </div>
            </div>

            <div className=' container p-5 rounded-lg border bg-white overflow-hidden flex justify-between items-center'>
                <div className='flex gap-2 items-center font-semibold text-xl'>
                    Average 4.6 <FaStar className=' text-yellow-500' />
                </div>
                <button className=' bg-red-500 p-3 text-white rounded-md inline-block text-sm md:text-lg'><FaStar className=' inline-block mr-2' /> write review</button>
            </div>

            <div className=' container rounded-lg border bg-white overflow-hidden'>
                <div className='flex gap-2 items-center p-5 border-b'>
                    <FaUsers className=' text-red-500' /> Reviews
                </div>
                <div className=' text-gray-700 text-sm'>

                    <div className=' border-b p-5 flex items-center gap-4'>
                        <img
                            className=' h-14 w-14 object-cover rounded-full border'
                            src="https://images.pexels.com/photos/4342400/pexels-photo-4342400.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt="user"
                        />
                        <div>
                            <h1 className=' font-medium mb-2'>John Wick</h1>
                            <p className=' text-gray-600 text-xs'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias reprehenderit assumenda ullam natus obcaecati sunt numquam voluptatem quos quis facilis quasi aliquam cupiditate aut maiores, sequi porro, molestiae aspernatur cumque!
                            </p>
                        </div>
                    </div>

                    <div className=' border-b p-5 flex items-center gap-4'>
                        <img
                            className=' h-14 w-14 object-cover rounded-full border'
                            src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt="user"
                        />
                        <div>
                            <h1 className=' font-medium mb-2'>Peter Parker</h1>
                            <p className=' text-gray-600 text-xs'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias reprehenderit assumenda ullam natus obcaecati sunt numquam voluptatem.                          </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BusinessPage