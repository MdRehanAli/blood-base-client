import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12'>
            <section className='mb-20 mt-5 lg:mt-10'>
                <Banner></Banner>
            </section>
            <main className='mb-20 mt-5 lg:mt-10'>
                <Features></Features>
                <Gallery></Gallery>
            </main>
        </div>
    );
};

export default Home;