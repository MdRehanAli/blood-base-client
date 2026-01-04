import React from 'react';
import alex from '../../../assets/alex.png'

const Testimonials = () => {
    return (
        <section className="my-20">
            <h1 className='text-center text-3xl md:text-5xl font-bold text-red-600'>What Our Clients Say</h1>
            <p className='my-3 text-red-400 text-center'>Testimonials</p>
            <div className='mt-8'>
                <div className="bg-primary text-white p-10 rounded text-center">
                    <p className="italic mb-4">
                        "Registering as a blood donor on this website was simple and smooth. I received a notification when someone nearby needed blood, and the coordination was excellent. Knowing that a small effort from me could save a life is incredibly fulfilling. This platform motivates people to donate regularly and responsibly."
                    </p>
                    <div className='flex justify-center mb-2'>
                        <img src={alex} alt="" className='w-28 rounded-full' />
                    </div>
                    <h4 className="font-semibold">John Alexis</h4>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;