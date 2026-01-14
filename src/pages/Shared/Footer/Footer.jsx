import React from 'react';
import logo from '../../../assets/BloodBase.png'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiPiapro } from 'react-icons/si';
import { Link } from 'react-router';
const Footer = () => {
    return (
        <div className='bg-primary '>
            <div className='max-w-7xl mx-auto w-11/12'>
                <footer className="grid md:grid-cols-3 gap-5 text-white p-10 px-20">
                    <nav className='flex flex-col items-center gap-1'>
                        <h6 className="text-2xl font-bold">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='flex flex-col items-center gap-1'>
                        <h6 className="text-2xl font-bold">Company</h6>
                        <Link to='/about-us' className="link link-hover">About us</Link>
                        <Link to='/contact' className="link link-hover">Contact</Link>
                        <Link to='/blogs' className="link link-hover">Blogs</Link>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex flex-col items-center gap-1'>
                        <h6 className="text-2xl font-bold">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
                <footer className="flex md:flex-row flex-col items-center gap-5 bg-primary border-t-2 border-white py-4 justify-between ">
                    <div><img src={logo} alt="" /></div>
                    <div className="grid grid-flow-col gap-4 text-5xl text-white">
                        <a className='p-1 rounded-full hover:scale-130 transition-transform duration-200'>
                            <FaInstagram></FaInstagram>
                        </a>
                        <a className='p-1 rounded-full hover:scale-130 transition-transform duration-200'>
                            <FaFacebook></FaFacebook>
                        </a>
                        <a className='p-1 rounded-full hover:scale-130 transition-transform duration-200'>
                            <SiPiapro></SiPiapro>
                        </a>
                    </div>
                </footer>
                <aside>
                    <p className='text-center pb-5 text-white'>Copyright © {new Date().getFullYear()} - BloodBase. All rights reserved.</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;