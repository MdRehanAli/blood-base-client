import React from 'react';
import bg from "../../../assets/blood.png";
import { Link } from 'react-router';

const AboutBanner = () => {
    return (
        <div className='bg-cover bg-center' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bg})` }}>
            <div className=" text-white py-30 rounded-2xl max-w-7xl mx-auto w-11/12">
                <h1 className='text-center text-2xl md:text-5xl font-bold text-red-600'>About US</h1>
                <p className='my-5 text-red-400 text-center'>Donate, Save & Inspire</p>
                <p className='text-center text-red-100 hidden lg:block'>Blood Base is a compassionate and user-friendly single-page web application built to connect blood donors, recipients, and organizers of donation events. It serves as a digital bridge for saving lives, making the process of finding, registering, and donating blood easier and more impactful.</p>
                <div className='flex justify-center'>
                    <Link to="/upcoming-events" className='btn btn-primary border-none text-white mt-5 shadow-none'>Explore more</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;