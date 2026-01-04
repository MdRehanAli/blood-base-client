import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Profile = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
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
    return (
        <div className='mx-auto md:h-full my-20'>
            <div className=' shadow-xl bg-gray-200 rounded-2xl p-5 py-10 md:p-10 w-11/12 mx-auto'>
                <div className='flex justify-center text-7xl'><FaUserCircle className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold text-center my-5'>My Profile</h1>

                <div>
                    <div className='flex flex-col justify-between items-center gap-10 my-10'>
                        <div className='p-5 shadow-2xl rounded-2xl relative'>
                            <img className='rounded-2xl w-[300px] mx-auto' src={user?.photoURL} alt="Provide correct image url to view" />
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-center text-3xl lg:text-5xl font-bold text-green-950 mt-10'><span className='text-secondary'>{user?.displayName}</span></h1>
                                <p className=' text-primary mt-5'><span className='font-bold'>Email: </span><span className='text-secondary'>{user?.email}</span></p>

                                <a onClick={handleLogOut} to='/' className="btn btn-primary mt-5">LogOut</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;