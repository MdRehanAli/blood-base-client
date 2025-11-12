import React from 'react';
import newsletterImage from '../../assets/newsletterImage.png'

const Newsletter = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-center text-5xl font-bold text-red-600'>Subscribe to our Newsletter</h1>
                <p className='my-5 text-red-400 text-center'>Get the latest updates on blood donation events</p>
                <form>
                    <input type="email" name="email" placeholder="Email Address" className="input input-primary w-full" />
                    <br />
                    <button className='btn btn-primary w-full my-5'>Subscribe</button>
                </form>
            </div>
            <div>
                <img src={newsletterImage} alt="Newsletter Image" />
            </div>

        </div>
    );
};

export default Newsletter;