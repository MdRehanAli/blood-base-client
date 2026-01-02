import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../../../assets/BloodBase.png";
import { AuthContext } from '../../../contexts/AuthContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { GoTriangleDown } from 'react-icons/go';
import './Navbar.css'
import ThemeToggle from '../../../components/ThemeToggle/ThemeToggle';

const Navbar = () => {

    const { user, logOut } = use(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log Out Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/upcoming-events'>Upcoming Events</NavLink></li>
    </>
    const privateLinks = <>
        <li><NavLink to='/create-event'>Create Event</NavLink></li>
        <li><NavLink to='/manage-events'>Manage Events</NavLink></li>
        <li><NavLink to='/joined-events'>Joined Events</NavLink></li>
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
                        className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-4 w-52 p-2 shadow">
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
            {
                user ?
                    (<div className='navbar-end'>
                        <ThemeToggle></ThemeToggle>
                        <div className="relative group inline-block">

                            <div className="dropdown dropdown-end mr-2">
                                <div tabIndex={0} role="button" className="flex items-end justify-center">
                                    <img className='rounded-full max-w-10 mr-1' src={user?.photoURL} alt="User Image" />
                                    <p className='text-3xl'><GoTriangleDown /></p>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu dropdown-content bg-primary rounded-box z-1 mt-5 w-52 p-2 shadow-sm">
                                    {privateLinks}
                                </ul>
                            </div>
                            <span className="absolute bottom-full mb-2 top-9 left-6 -translate-x-1/2 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                {user?.displayName}
                            </span>
                        </div>
                        <button onClick={handleLogout}>Sign Out</button>
                    </div>)
                    :
                    (<div className='navbar-end'>
                        <ThemeToggle></ThemeToggle>
                        <NavLink to='/login' className="btn btn-primary">Login</NavLink>
                        {/* <NavLink to='/register' className="btn btn-primary">Register</NavLink> */}
                    </div>)
            }
        </div >
    );
};

export default Navbar;