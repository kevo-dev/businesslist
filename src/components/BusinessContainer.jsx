'use client'
import React, { useState } from 'react';
import BusinessCard from './BusinessCard'; // Import your BusinessCard component here
import SectionBox from './SectionBox';

const businesses = [
    {
        id: 1,
        thumbnail: 'https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        owner: 'John Doe',
        name: 'ABC Corporation',
        city: 'New York',
        category: "Hotel"
    },
    {
        id: 2,
        thumbnail: 'https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&w=1600',
        owner: 'Jane Smith',
        name: 'XYZ Enterprises',
        city: 'Los Angeles',
        category: "It Services"

    },
    {
        id: 3,
        thumbnail: 'https://images.pexels.com/photos/2182982/pexels-photo-2182982.jpeg?auto=compress&cs=tinysrgb&w=1600',
        owner: 'Robert Johnson',
        name: 'PQR Inc.',
        city: 'Chicago',
        category: "Business Consultant"

    },
    {
        id: 4,
        thumbnail: 'https://images.pexels.com/photos/860227/pexels-photo-860227.jpeg?auto=compress&cs=tinysrgb&w=1600',
        owner: 'Emily Davis',
        name: 'LMN Co.',
        city: 'San Francisco',
        category: "Hotel"

    },
    {
        id: 5,
        thumbnail: 'https://images.pexels.com/photos/837129/pexels-photo-837129.jpeg?auto=compress&cs=tinysrgb&w=1600',
        owner: 'Michael Wilson',
        name: 'EFG Ltd.',
        city: 'Miami',
        category: "Hotel"
    },
    {
        id: 6,
        thumbnail: 'https://images.pexels.com/photos/2887207/pexels-photo-2887207.jpeg?auto=compress&cs=tinysrgb&w=1600',
        owner: 'Sarah Brown',
        name: 'HIJ Industries',
        city: 'Houston',
        category: "Hotel"
    },
    {
        id: 7,
        thumbnail: 'https://images.pexels.com/photos/860227/pexels-photo-860227.jpeg?auto=compress&cs=tinysrgb&w=1600',
        owner: 'Emily Davis',
        name: 'LMN Co.',
        city: 'San Francisco',
        category: "Hotel"
    },
    {
        id: 8,
        thumbnail: 'https://images.pexels.com/photos/2887207/pexels-photo-2887207.jpeg?auto=compress&cs=tinysrgb&w=1600',
        owner: 'Sarah Brown',
        name: 'HIJ Industries',
        city: 'Houston',
        category: "Hotel"
    },
];

const BusinessContainer = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // Function to filter businesses based on selected category and search term
    const filteredBusinesses = businesses.filter((business) => {
        // Filter by category
        if (selectedCategory !== 'All' && business.category !== selectedCategory) {
            return false;
        }
        // Filter by search term (you can modify this to search in more fields)
        return business.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Function to handle category selection
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    // Function to handle search input
    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="second-bg">
            <div className="container max-w-[1300px] w-full px-5 mx-auto py-20">
                <SectionBox
                    title="Find Business"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
                />
                <div className='mb-5 border-b flex justify-between items-center p-3 text-sm'>
                    <div>
                        <button
                            className={`mr-2 px-3 py-1 rounded-md ${selectedCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-white'
                                }`}
                            onClick={() => handleCategorySelect('All')}
                        >
                            All
                        </button>
                        {/* Add buttons for other categories */}
                        <button
                            className={`mr-2 px-3 py-1 rounded-md ${selectedCategory === 'Hotel' ? 'bg-blue-500 text-white' : 'bg-white'
                                }`}
                            onClick={() => handleCategorySelect('Category1')}
                        >
                            Category1
                        </button>
                        <button
                            className={`mr-2 px-3 py-1 rounded-md ${selectedCategory === 'IT SERVICES' ? 'bg-blue-500 text-white' : 'bg-white'
                                }`}
                            onClick={() => handleCategorySelect('Category2')}
                        >
                            Category2
                        </button>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Search by name..."
                            className="w-full border p-2 rounded-md text-sm outline-none"
                            value={searchTerm}
                            onChange={handleSearchInput}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
                    {filteredBusinesses.map((business) => (
                        <BusinessCard key={business.id} data={business} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BusinessContainer;