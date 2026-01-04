import React from 'react';
import organization from '../../../assets/organization.jpg'
import { CiCircleCheck } from "react-icons/ci";

const Organization = () => {
    return (
        <section className="my-20">
            <h1 className='text-center text-3xl md:text-5xl font-bold text-red-600'>Our Organization</h1>
            <p className='my-3 text-red-400 text-center'>Explore recent blood donation events</p>
            <div className="max-w-7xl w-11/12 mx-auto grid md:grid-cols-2 gap-10 mt-8 items-center">
                <img src={organization} className="rounded-lg" />
                <div className='flex flex-col'>
                    <h5 className="text-primary font-semibold mb-2 md:text-left text-center">Help the People in Need</h5>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:text-left text-center">
                        Welcome to Blood Donors Organization
                    </h2>
                    <div className='mx-auto md:mx-0'>
                        <div className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-2 my-4 justify-between">
                            <p><CiCircleCheck className='inline text-primary text-2xl' /> Good Service</p>
                            <p><CiCircleCheck className='inline text-primary text-2xl' /> Help People</p>
                            <p><CiCircleCheck className='inline text-primary text-2xl' /> Blood Bank</p>
                            <p><CiCircleCheck className='inline text-primary text-2xl' /> Health Check</p>
                        </div>
                    </div>
                    <button className="btn btn-primary">
                        Explore Now
                    </button>
                </div>
            </div>
        </section>

    );
};

export default Organization;