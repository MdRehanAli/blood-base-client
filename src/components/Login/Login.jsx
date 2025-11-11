import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold text-center text-primary mt-2 mb-5">Login now!</h1>
                <div className="card-body">
                    <form>
                        <fieldset className="fieldset">
                            {/* email  */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" required placeholder="Email" />

                            {/* password  */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" required placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>

                            <button className="btn btn-primary mt-4">Login</button>
                        </fieldset>
                    </form>
                    <button className='btn btn-outline w-full hover:text-white hover:btn-primary'><FcGoogle className='text-2xl'></FcGoogle> Login with Google</button>

                    <p className='mt-2 text-center'>New to our Website? Please <Link className='underline text-primary font-bold' to="/register">Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;