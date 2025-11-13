import React from 'react';
import img1 from '../../assets/event1.png'
import img2 from '../../assets/event2.png'
import img3 from '../../assets/event3.png'
import img4 from '../../assets/event4.png'
import img5 from '../../assets/event5.png'
import img6 from '../../assets/event6.png'

const Gallery = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center text-5xl font-bold text-red-600'>Gallery</h1>
            <p className='my-5 text-red-400 text-center'>Explore recent blood donation events</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
                <img className='mx-auto rounded-xl hover:scale-110 hover:opacity-70 ease-in-out duration-200' src={img1} alt="Event Image" />
                <img className='mx-auto rounded-xl hover:scale-110 hover:opacity-70 ease-in-out duration-200' src={img2} alt="Event Image" />
                <img className='mx-auto rounded-xl hover:scale-110 hover:opacity-70 ease-in-out duration-200' src={img3} alt="Event Image" />
                <img className='mx-auto rounded-xl hover:scale-110 hover:opacity-70 ease-in-out duration-200' src={img4} alt="Event Image" />
                <img className='mx-auto rounded-xl hover:scale-110 hover:opacity-70 ease-in-out duration-200' src={img5} alt="Event Image" />
                <img className='mx-auto rounded-xl hover:scale-110 hover:opacity-70 ease-in-out duration-200' src={img6} alt="Event Image" />

            </div>
        </div>
    );
};

export default Gallery;