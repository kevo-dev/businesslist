'use client'
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    const sections = [
        {
            title: 'Company',
            links: [
                { name: 'Home', link: '/' },
                { name: 'Find', link: '/Find' },
                { name: 'About', link: '/about' },
                { name: 'Services', link: '/services' },
            ],
        },
        {
            title: 'Businesses',
            links: [
                { name: 'Hotels', link: '/hotels' },
                { name: 'Booking', link: '/bookings' },
                { name: 'Management', link: '/management' },
                { name: 'Restaurant', link: '/restaurant' },
            ],
        },
        {
            title: 'Support',
            links: [
                { name: 'Help Center', link: '/help' },
                { name: 'Terms of Service', link: '/terms' },
                { name: 'Privacy Policy', link: '/privacy' },
                { name: 'Contact', link: '/contact' },
            ],
        },
    ];

    return (
        <footer className="text-center md:text-left border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-bold mb-4 text-red-500'>ContactHub</h1>
                        <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores cumque blanditiis natus qui maiores obcaecati ex consequuntur voluptates velit facere.</p>
                    </div>
                    {sections.map((section, index) => (
                        <FooterSection key={index} section={section} />
                    ))}
                </div>
                <div className="flex justify-center items-center mt-10 border-t py-7 text-gray-600">
                    © {new Date().getFullYear()} codewitham. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

const FooterSection = ({ section }) => {
    return (
        <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <ul className="space-y-2">
                {section.links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.link}>
                            <span className="text-gray-500 hover:text-purple-500 transition duration-300 cursor-pointer text-sm">
                                {link.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Footer;