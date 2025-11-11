import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../../assets/BloodBase.png";

const Navbar = () => {

    const links = <>
        <NavLink to='/'><a>Home</a></NavLink>
        <NavLink to='/upcoming-events'><a>Upcoming Events</a></NavLink>
    </>

    return (
        <div className="navbar bg-primary text-white font-bold shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className=''><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn btn-primary">Login</Link>
                <Link to='/register' className="btn btn-primary">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;