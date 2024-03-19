import React from 'react';
import { FaStar, FaMapMarker, FaBuilding } from 'react-icons/fa';
import SectionBox from './SectionBox';

const CatalogSection = () => {
    return (
        <div className="py-20 px-5">
            <div className="container max-w-[1300px] w-full mx-auto">
                <SectionBox
                    title={"Find Business In Your Country"}
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
                />
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <CatalogCard
                        image="https://images.pexels.com/photos/887848/pexels-photo-887848.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        rating={4.5}
                        country="United States"
                        cities="New York, Los Angeles"
                        listing={250}
                    />
                    <CatalogCard
                        image="https://images.pexels.com/photos/3859774/pexels-photo-3859774.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        rating={4.2}
                        country="Canada"
                        cities="Toronto, Vancouver"
                        listing={150}
                    />
                    <CatalogCard
                        image="https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        rating={4.8}
                        country="United Kingdom"
                        cities="London, Manchester"
                        listing={200}
                    />
                    <CatalogCard
                        image="https://images.pexels.com/photos/3214995/pexels-photo-3214995.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        rating={4.8}
                        country="UAE"
                        cities="Dubai, Abudhabi"
                        listing={200}
                    />
                </div>
            </div>
        </div>
    );
};

const CatalogCard = ({ image, rating, country, cities, listing }) => {
    const starIcons = [];
    for (let i = 0; i < rating; i++) {
        starIcons.push(<FaStar key={i} className="text-yellow-400" />);
    }

    return (
        <div className="relative rounded-md overflow-hidden h-[400px]">
            <div className="image-container h-full w-full overflow-hidden hover:scale-105 transform transition-transform duration-300">
                <img src={image} alt="city" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-full flex flex-col gap-3  p-3 text-white bg-black bg-opacity-50 text-sm">
                <h1 className="text-xl font-medium">{country}</h1>
                <div className="flex gap-1 items-center">{starIcons}</div>
                <div className="text-xs">
                    <div className="flex gap-2 items-center">
                        <FaMapMarker className="text-yellow-400" /> {cities}
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaBuilding className="text-yellow-400" /> {listing} Listings
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogSection;
