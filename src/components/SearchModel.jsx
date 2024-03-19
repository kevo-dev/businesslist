import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import IconBox from './IconBox';

const SearchModal = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // Implement your search logic here
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-lg">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    className=' outline-none'
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}><FaSearch /></button>
                <div className='absolute top-[-10px] left-[-10px] bg-red-500 p-2 rounded-full text-white cursor-pointer text-xs' onClick={onClose}>
                    <FaTimes />
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
