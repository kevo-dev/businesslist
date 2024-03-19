import React from 'react';
import { FaCogs, FaChartLine, FaMobileAlt } from 'react-icons/fa';
import SectionBox from './SectionBox';

const FeaturesSection = () => {
    const features = [
        {
            
            title: 'Hotels',
            
        },
        {
            
            title: 'Schools',
            
        },
        {
            
            title: 'Companies',
            
        },
        {
            
            title: 'Agencies',
            
        },
    ];

    return (
        <section className="p-5 mx-auto max-w-[800px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0 text-left">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section >
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <div className="p-2 rounded-xl border border-red-500 flex gap-4 items-center">
        <div className="text-3xl text-red-500 mb-4">{icon}</div>
        <div>
            <h3 className="text-lg font-medium text-gray-200 mb-2">{title}</h3>
            <p className=" text-xs text-gray-300">{description}</p>
        </div>
    </div>
);

export default FeaturesSection;


