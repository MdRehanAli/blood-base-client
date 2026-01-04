import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/axiosSecure';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signIn, googleSignIn, } = useAuth()

    const location = useLocation();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleLogin = (data) => {
        console.log("After LogIn Data: ", data);
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(location?.state || '/')
            })
            .catch(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Invalid Email & Password",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const newRole = 'user';

                const userInfo = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL,
                    role: newRole
                }

                // Create user in the Database 
                useAxiosSecure.post('/users', userInfo)
                    .then(res => {
                        console.log("User data has been stored: ", res.data);

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            iconColor: "#E53E3E",
                            title: "Google Login Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(location?.state || '/')
                    })

            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold text-center text-primary mt-2 mb-5">Login now!</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <fieldset className="fieldset">
                            {/* Email Field  */}
                            <label className="label">Email</label>
                            <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                            {errors.email?.type === "required" && <p className='text-red-500'>Email is Required</p>}

                            {/* Password Field  */}
                            <label className="label">Password</label>
                            <div className='flex items-center relative'>
                                <input type={showPassword ? "text" : "password"} {...register('password', {
                                    required: true, minLength: 6
                                })} className="input" placeholder="Password" />
                                <button onClick={handleShowPassword} className='absolute top-2 right-7 text-xl text-primary'>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                            </div>

                            {errors.password?.type === "required" && <p className='text-red-500'>Password is Required</p>}
                            {errors.password?.type === "minLength" && <p className='text-red-500'>Password must have at least 6 Character</p>}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-primary mt-4">Login</button>
                        </fieldset>
                    </form>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full hover:text-white hover:btn-primary'><FcGoogle className='text-2xl'></FcGoogle> Login with Google</button>

                    <p className='mt-2 text-center'>New to our Website? Please <Link state={location.state} className='underline text-primary font-bold' to="/register">Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;