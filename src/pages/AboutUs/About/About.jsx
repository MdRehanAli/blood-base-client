import React from 'react';
import AboutBanner from '../../../assets/about.jpg';
import { Link } from 'react-router';

const About = () => {
    return (
        <section className='my-20'>
            <h1 className='text-center text-3xl md:text-5xl font-bold text-red-600'>About</h1>
            <p className='my-3 text-red-400 text-center'>Explore our works with us</p>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-8">
                <div>
                    <h5 className="text-primary font-semibold mb-2">Who We Are?</h5>
                    <h1 className="text-4xl font-bold mb-4">
                        We are here not for income, but for outcome
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Blood donation saves lives. Join us to help people in need.
                    </p>
                    <div className='flex justify-center md:justify-start'>
                        <Link to='upcoming-events' className="btn btn-primary text-white px-6 py-3 rounded">
                            Explore Now
                        </Link>
                    </div>
                </div>
                <img src={AboutBanner} className="rounded-lg shadow" />
            </div>
        </section>
    );
};

export default About;