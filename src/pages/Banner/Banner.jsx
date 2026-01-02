import React from 'react';
import bg from "../../assets/blood.png";
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className=''>
            <div className="bg-cover bg-center text-white p-10 rounded-2xl"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})` }}>
                <h1 className='text-center text-5xl font-bold text-red-600'>Blood Base</h1>
                <p className='my-5 text-red-400 text-center'>Donate, Save & Inspire</p>
                <p className='text-center text-red-100 hidden lg:block'>Blood Base is a compassionate and user-friendly single-page web application built to connect blood donors, recipients, and organizers of donation events. It serves as a digital bridge for saving lives, making the process of finding, registering, and donating blood easier and more impactful.</p>
                <div className='flex justify-center'>
                    <Link to="/" className='btn btn-primary border-none text-white mt-5 shadow-none'>Explore more</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;