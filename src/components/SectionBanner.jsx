import React from 'react';
import SectionBox from './SectionBox';

const SectionBanner = ({ image, title }) => {
    return (
        <div className="relative bg-black py-10">
            <img
                src={image}
                alt="banner"
                className="absolute inset-0 object-cover h-full w-full opacity-20 z-0"
            />
            <div className="relative z-10 text-white py-20 text-center">
                <h1 className=' uppercase font-semibold text-2xl md:text-4xl'>{title}</h1>
            </div>
        </div>
    );
};

export default SectionBanner;
