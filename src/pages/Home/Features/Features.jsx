import React from 'react';
import feature1 from '../../../assets/Create.png'
import feature2 from '../../../assets/Manage.png'
import feature3 from '../../../assets/heart.png'

const Features = () => {
    return (
        <div>
            <h1 className='text-center text-3xl md:text-5xl font-bold text-red-600'>Features</h1>
            <p className='my-3 text-red-400 text-center'>Discover key features of our website</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8'>
                <div className='border border-red-100 shadow-xs p-10 rounded-2xl hover:scale-105 hover:bg-red-100 transform duration-200'>
                    <img className='mx-auto ' src={feature1} alt="Create Event" />
                    <h1 className='font-bold text-xl md:text-3xl text-center mt-10 mb-5'>Create Event</h1>
                    <p className='text-center'>Organize blood donation events and mobilize donors.</p>
                </div>
                <div className='border border-red-100 shadow-xs p-10 rounded-2xl hover:scale-105 hover:bg-red-100 transform duration-200'>
                    <img className='mx-auto ' src={feature2} alt="Manage Event" />
                    <h1 className='font-bold text-xl md:text-3xl text-center mt-10 mb-5'>Manage Events</h1>
                    <p className='text-center'>Edit or cancel your events as needed.</p>
                </div>
                <div className='border border-red-100 shadow-xs p-10 rounded-2xl hover:scale-105 hover:bg-red-100 transform duration-200'>
                    <img className='mx-auto ' src={feature3} alt="Track Donation" />
                    <h1 className='font-bold text-xl md:text-3xl text-center mt-10 mb-5'>Track Donations</h1>
                    <p className='text-center'>Track the number of blood donations and donors.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;