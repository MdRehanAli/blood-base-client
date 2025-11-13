import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const { signIn, googleSignIn, } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                form.reset();
                navigate(`${location.state ? location.state : "/"}`);

            })
            .catch(error => {
                toast.error(error.message);
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);

                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }

                // Create user in the Database 
                fetch('https://blood-base-server.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("After Saving", data)
                    })

                navigate(location.state || '/')

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

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
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                            {/* email  */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full" required placeholder="Email" />

                            {/* password  */}
                            <label className="label">Password</label>
                            <div className='flex items-center relative'>
                                <input type={showPassword ? "text" : "password"} name='password' className="input w-full" required placeholder="Password" />
                                <button onClick={handleShowPassword} className='absolute top-2 right-5 text-2xl text-primary'>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                            </div>

                            <div><a className="link link-hover">Forgot password?</a></div>

                            <button className="btn btn-primary mt-4">Login</button>
                        </fieldset>
                    </form>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full hover:text-white hover:btn-primary'><FcGoogle className='text-2xl'></FcGoogle> Login with Google</button>

                    <p className='mt-2 text-center'>New to our Website? Please <Link className='underline text-primary font-bold' to="/register">Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;