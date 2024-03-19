import React from 'react';
import { FaSearch } from 'react-icons/fa';

const HeroSection2 = () => {
    return (
        <section className="hero bg-cover bg-center bg-gradient-to-b from-blue-500 to-blue-900 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    Find the Perfect Business
                </h1>
                <p className="text-lg md:text-xl mb-10">
                    Discover businesses in your city and beyond.
                </p>
                <form className="mx-auto flex flex-col md:flex-row gap-5 justify-center items-center p-5 bg-white text-gray-700 rounded-lg w-full md:w-2/3 shadow-lg">
                    <div className="md:w-1/3">
                        <label htmlFor="city" className="sr-only">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="City"
                            className="w-full p-3  outline-none"
                        />
                    </div>
                    <div className="md:w-1/3">
                        <label htmlFor="keyword" className="sr-only">
                            Keyword
                        </label>
                        <input
                            type="text"
                            id="keyword"
                            name="keyword"
                            placeholder="Keyword"
                            className="w-full p-3  outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="md:w-1/3 rounded-full p-3 bg-red-500 text-white"
                    >
                        <FaSearch />
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default HeroSection2;
