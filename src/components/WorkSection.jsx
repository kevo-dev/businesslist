import React from 'react';
import SectionBox from './SectionBox';
import { FaGift, FaRegCheckCircle, FaRegClock, FaRegFileAlt, FaRocket, FaSearch, FaSearchLocation, FaShoppingCart } from 'react-icons/fa';

const WorkSection = () => {
    // Dummy data for work cards
    const workCards = [
        {
            icon: <FaSearch />,
            title: 'Choose What To Do?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
            icon: <FaGift />,
            title: 'Find What Your Want?',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            icon: <FaRocket />,
            title: 'Explore Amazing Places',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        {
            icon: <FaShoppingCart />,
            title: "Best Business services",
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        {
            icon: <FaSearchLocation />,
            title: "Find Business In Your Area",
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        {
            icon: <FaRegClock />,
            title: "Full Time Customer Support",
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        }
    ];

    return (
        <div className='max-w-[1200px] mx-auto py-20 px-5 flex flex-col items-center'>
            <SectionBox title={"How It Works"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 py-10'>
                {workCards.map((card, index) => (
                    <WorkCard key={index} icon={card.icon} title={card.title} description={card.description} />
                ))}
            </div>
        </div>
    );
}

const WorkCard = ({ icon, title, description }) => {
    return (
        <div className='flex flex-col items-center gap-6 rounded-lg border p-10 text-center w-full'>
            <div className='md:text-3xl text-white rounded-full p-5 bg-red-500 w-fit'>{icon}</div>
            <h1 className='text-2xl font-normal'>{title}</h1>
            <p className='text-gray-500'>{description}</p>
        </div>
    );
}

export default WorkSection;
