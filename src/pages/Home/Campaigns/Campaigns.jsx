import React from 'react';
import img1 from '../../../assets/event1.png'
import img2 from '../../../assets/event2.png'
import img3 from '../../../assets/event3.png'
import img4 from '../../../assets/event4.png'
import { Link } from 'react-router';

const Campaigns = () => {
    
    const imgs = [img1, img2, img3, img4];

    return (
        <section className="">
            <h1 className='text-center text-3xl md:text-5xl font-bold text-red-600'>Popular Campaigns</h1>
            <p className='my-3 text-red-400 text-center'>Explore recent blood donation Campaigns</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 mt-8">
                {imgs.map((img, i) => (
                    <div key={i} className="bg-white shadow rounded overflow-hidden">
                        <img src={img} />
                        <div className="p-4">
                            <h3 className="font-semibold mb-2 text-center">Blood Donation Camp</h3>
                            <p className="text-sm text-gray-600 text-center">
                                Join our donation campaigns and save lives.
                            </p>
                        </div>
                        <div className='flex justify-center'>
                            <Link to='/upcoming-events' className='btn btn-primary w-full'>View More Events</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Campaigns;