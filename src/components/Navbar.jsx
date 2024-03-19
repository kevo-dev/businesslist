'use client'
import React, { useState, useEffect } from 'react';
import IconBox from './IconBox';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import SearchModal from './SearchModel';

const menu = [
    { name: "Find", link: "/find" },
    { name: "Directory", link: "/directory" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" }
];

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false); // New state for search modal
    const [isScrolled, setScrolled] = useState(false);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const handleMobileMenuClick = () => {
        closeMobileMenu();
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const openSearch = () => {
        setSearchOpen(true);
    };

    const closeSearch = () => {
        setSearchOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 lg:px-10  z-20 w-full ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className=' container max-w-[1300px] py-3 px-5 mx-auto w-full flex justify-between items-center'>
                <Link className='text-2xl md:text-3xl font-semibold text-red-500' href={'/'}>
                    ContactHub
                </Link>

                <div className='relative flex items-center gap-5'>
                    <IconBox icon={<FaSearch onClick={openSearch} className='cursor-pointer text-red-500' />} />

                    <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />

                    <div className='hidden md:flex items-center gap-5'>
                        {menu && menu.map((item, index) => (
                            <Link className={`p-2 text-gray-500 ${isScrolled ? 'text-black' : 'text-white'}`} href={item.link} key={index}>
                                {item.name}
                            </Link>
                        ))}
                        <UserBox />
                    </div>
                    <button
                        onClick={toggleMobileMenu}
                        className={`md:hidden z-40 ${isMobileMenuOpen
                            ? 'bg-red-500 text-white text-lg rounded-full'
                            : ''
                            }`}
                    >
                        {isMobileMenuOpen ? (
                            <IconBox icon={<FaTimes />} />
                        ) : (
                            <IconBox icon={<FaBars className='text-red-500' />} />
                        )}
                    </button>

                    <MobileMenu isOpen={isMobileMenuOpen} onClick={handleMobileMenuClick} />
                </div>
            </div>
        </header>
    );
};

const MobileMenu = ({ isOpen, onClick }) => {
    return (
        <div onClick={onClick} className={`fixed top-0 right-0 h-screen w-full bg-black bg-opacity-40 ${isOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-col gap-2 w-3/4 justify-center items-center bg-white h-screen'>
                {menu && menu.map((item, index) =>
                    <Link className='p-2 text-gray-500' href={item.link} key={index}>
                        {item.name}
                    </Link>
                )}
                <UserBox />
            </div>
        </div>
    );
};

export const UserBox = () => {
    const { data: session } = useSession()

    const handleGoogleSignIn = () => {
        signIn('google');
    };

    return (
        session?.user ?
            <Link href={"/profile"}><img src={session?.user?.image} alt={session?.user?.name} className='rounded-full h-8 w-8 object-cover border border-gray-200' /></Link>
            :
            <button
                className='bg-red-500 text-white rounded-md p-2'
                onClick={handleGoogleSignIn}
            >
                Sign In
            </button >
    )
}

export default Navbar;