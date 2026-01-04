import React from 'react';
import Banner from '../../Banner/Banner';
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import Newsletter from '../Newsletter/Newsletter';
import { Helmet } from 'react-helmet-async';
import About from '../../AboutUs/About/About';

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Blood Base | Home</title>
            </Helmet>
            <section className='mb-20 mt-5 lg:mt-10'>
                <Banner></Banner>
            </section>
            <main className='mb-20 lg:mt-10 max-w-7xl mx-auto w-11/12'>
                <Features></Features>
                <About></About>
                <Gallery></Gallery>
                <Newsletter></Newsletter>
            </main>
        </div>
    );
};

export default Home;