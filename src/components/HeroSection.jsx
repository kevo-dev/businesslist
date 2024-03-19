import React from 'react';
import { FaSearch } from 'react-icons/fa';
import FeaturesSection from './FeaturesSection';

const HeroSection = () => {
    return (
        <section className="hero relative min-h-screen flex flex-col items-center justify-center">
            <div className='container z-10 px-5 mx-auto text-center py-10 flex flex-col gap-10'>
                <div className='max-w-[700px] w-full mx-auto text-center flex flex-col items-center gap-5 py-5'>
                    <h1 className='text-4xl md:text-6xl font-semibold text-white'>
                    Unlock the<span className=' text-red-500'> Power of Connectivity</span>
                    </h1>
                    <hr className=' border-4 border-red-400 w-10' />
                    <p className=' text-gray-200'>Welcome to ContactHarbor, where networking meets simplicity. Streamline your connections and unlock new opportunities effortlessly. Join us today to experience a smarter way to network.</p>
                </div>
                {/* <form className="mx-auto flex flex-col md:flex-row gap-5 justify-center  items-start md:items-center py-5 px-5 md:px-10 bg-white text-gray-700 rounded-md md:rounded-full w-fit border">
                    <div className=' text-left md:border-r w-full'>
                        <label htmlFor="area" className='p-2'>
                            Area
                        </label>
                        <input
                            type="text"
                            id="area"
                            name="area"
                            placeholder="search for area"
                            className="w-full p-3  outline-none"

                        />
                    </div>
                    <div className=' text-left md:border-r w-full'>
                        <label htmlFor="city" className='p-2'>
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="city"
                            className="w-full p-3  outline-none"

                        />
                    </div>
                    <div className=' text-left md:border-r w-full'>
                        <label htmlFor="term" className='p-2'>
                            Search For
                        </label>
                        <input
                            type="text"
                            id="term"
                            name="term"
                            placeholder="search for"
                            className="w-full p-3  outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className=" rounded-full p-3 bg-red-500 text-white"
                    >
                        <FaSearch />
                    </button>
                </form> */}
                <FeaturesSection />
            </div>
            <div className=' absolute inset-0 bg-black bg-opacity-[0.88] z-0'></div>
        </section >
    );
};

const Features = () => {
    return <div></div>
}

export default HeroSection;
