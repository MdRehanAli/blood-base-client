import React from 'react';
import Banner from '../../Banner/Banner';
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div className=''>
            <section className='mb-20 mt-5 lg:mt-10'>
                <Banner></Banner>
            </section>
            <main className='mb-20 lg:mt-10 max-w-7xl mx-auto w-11/12'>
                <Features></Features>
                <Gallery></Gallery>
                <Newsletter></Newsletter>
            </main>
        </div>
    );
};

export default Home;