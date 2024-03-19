'use client'
import React from "react";
import Slider from "react-slick";
import SectionBox from "./SectionBox";

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla libero vel ultrices.",
            author: "John Doe",
            image:
                "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            text:
                "Pellentesque euismod suscipit est, at venenatis libero venenatis non. Donec euismod, urna in fermentum.",
            author: "Jane Smith",
            image:
                "https://images.pexels.com/photos/1073097/pexels-photo-1073097.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 3,
            text:
                "Vivamus blandit, libero quis venenatis viverra, velit lacus consectetur odio, ut vehicula risus ligula vel dui.",
            author: "Alice Johnson",
            image:
                "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 4,
            text:
                "Sed euismod bibendum bibendum. Vestibulum tristique egestas tellus, et facilisis ligula laoreet non. ",
            author: "Bob Brown",
            image:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="relative second-bg overflow-hidden p-5 testimonial-bg">
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
            <div className="container mx-auto max-w-[1200px] py-20 px-5 relative z-10">
                <SectionBox
                    title={"What Our Users Say"}
                />
                <p className="text-white text-center max-w-xl mx-auto mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                </p>
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id}>
                            <div className="p-7 flex flex-col justify-center m-5 rounded-xl border border-gray-200 bg-white">
                                <p className="text-gray-500 mb-5">{testimonial.text}</p>
                                <div className="flex items-center ">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="w-10 h-10 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <p className="text-md font-medium text-red-500">{testimonial.author}</p>
                                        <p className="text-gray-500 text-sm">Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;