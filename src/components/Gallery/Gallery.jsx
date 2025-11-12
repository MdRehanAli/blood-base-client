import React from 'react';
import img1 from '../../assets/event1.png'
import img2 from '../../assets/event2.png'
import img3 from '../../assets/event3.png'
import img4 from '../../assets/event4.png'
import img5 from '../../assets/event5.png'
import img6 from '../../assets/event6.png'

const Gallery = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-bold text-red-600'>Gallery</h1>
            <p className='my-5 text-red-400 text-center'>Explore recent blood donation events</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
                <div className='border border-red-600 p-10 rounded-2xl hover:bg-red-100 transform duration-200'>
                    <img className='mx-auto ' src={img1} alt="Event Image" />
                    <img className='mx-auto ' src={img2} alt="Event Image" />
                    <img className='mx-auto ' src={img3} alt="Event Image" />
                    <img className='mx-auto ' src={img4} alt="Event Image" />
                    <img className='mx-auto ' src={img5} alt="Event Image" />
                    <img className='mx-auto ' src={img6} alt="Event Image" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;