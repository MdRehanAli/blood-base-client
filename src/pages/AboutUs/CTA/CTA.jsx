import React from 'react';
import { Link } from 'react-router';

const CTA = () => {
    return (
        <section className="bg-primary text-white py-12 my-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Let's change the world, Join us now!
            </h2>
            <Link to='/contact' className="btn btn-primary">
                Contact Us
            </Link>
        </section>
    );
};

export default CTA;