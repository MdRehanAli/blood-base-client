import React from 'react';
import ContactBanner from '../ContactBanner/ContactBanner';
import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <div className='mt-10'>
            <Helmet>
                <title>Blood Base | Contact</title>
            </Helmet>
            <ContactBanner></ContactBanner>
            <h1>Contact</h1>
        </div>
    );
};

export default Contact;