import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import { Helmet } from 'react-helmet-async';
import About from '../About/About';
import Stats from '../Stats/Stats';
import CTA from '../CTA/CTA';
import Organization from '../Organization/Organization';

const AboutUs = () => {
    return (
        <div className='mt-10'>
            <Helmet>
                <title>Blood Base | About US</title>
            </Helmet>
            <AboutBanner></AboutBanner>
            <About></About>
            <Stats></Stats>
            <Organization></Organization>
            <CTA></CTA>
        </div>
    );
};

export default AboutUs;