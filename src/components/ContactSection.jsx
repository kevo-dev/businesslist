import React from 'react';
import SectionBox from './SectionBox';

const ContactSection = () => {
    return (
        <section className=" py-16 second-bg px-5">
            <SectionBox title={"Contact Us"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ullam sunt ex, ratione voluptates. Necessitatibus neque odit cum saepe sit aspernatur!"} />
            <div className="container max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center gap-5 bg-white rounded-md overflow-hidden shadow-lg" >
                <div className="md:w-1/2 py-14 px-8 relative text-white bg-black">
                    <img
                        src='https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=1600'
                        className=' absolute z-0 inset-0 bg-black opacity-30 h-full w-full object-cover' />
                    <div className=' relative z-10'>
                        <h2 className="text-3xl font-semibold  mb-6">Feel Free to contact us anytime.</h2>
                        <hr className=' w-10 border-4 border-red-500 mb-10' />
                        <p className=" leading-10">
                            Address: 123 Main St, Cityville<br />
                            Phone: (555) 555-5555<br />
                            Email: info@example.com
                        </p>
                    </div>
                </div>

                <div className="md:w-1/2 py-14 px-5">
                    <ContactForm />
                </div>
            </ div>
        </section >
    );
};

const ContactForm = () => {
    return (
        <form>
            <h2 className="text-3xl font-semibold  mb-6">Ask Anything?</h2>
            <hr className=' w-10 border-4 border-red-500 mb-10' />
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Your Email"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
                    placeholder="Your Message"
                ></textarea>
            </div>
            <div className="mb-4">
                <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                >
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default ContactSection;
