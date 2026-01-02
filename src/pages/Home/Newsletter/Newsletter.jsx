import React from 'react';
import newsletterImage from '../../../assets/newsletterImage.png'
import Swal from 'sweetalert2';

const Newsletter = () => {

    const handleSubscribe = (e) => {
        e.preventDefault();

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Subscription Successfully",
            showConfirmButton: false,
            timer: 1500
        });

        e.target.reset()
    }

    return (
        <div className='flex flex-col md:flex-row gap-10 justify-between items-center'>
            <div  className='md:w-1/2'>
                <h1 className='text-center text-5xl font-bold text-red-600'>Subscribe to our Newsletter</h1>
                <p className='my-5 text-red-400 text-center'>Get the latest updates on blood donation events</p>
                <form onSubmit={handleSubscribe}>
                    <input type="email" name="email" placeholder="Email Address" required className="input input-primary w-full" />
                    <br />
                    <button className='btn btn-primary w-full my-3'>Subscribe</button>
                </form>
            </div>
            <div  className='md:w-1/2'>
                <img src={newsletterImage} alt="Newsletter Image" />
            </div>

        </div>
    );
};

export default Newsletter;