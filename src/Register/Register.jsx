import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {

    const { createUser } = use(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        if (name.length < 5) {
            toast.error("Name should be more then 5 character");
            return;
        }
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // Validate Password 
        const validatePassword = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        //  Check if password matches
        if (!validatePassword.test(password)) {
            toast.error("Opps! Password must be at least 6 characters long, include at least one uppercase letter, one lowercase letter");
            return
        }

        console.log(name, email, photo, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const newUser = {
                    name: name,
                    email: email,
                    photo: photo,
                }

                // Create user in the Database 
                fetch('http://localhost:5000/users', {
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

                navigate(location.state || '/');

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                form.reset();
            })
            .catch(error => {
                toast.error(error.message);
            })

    }

    return (
        <div className="hero min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold text-center text-primary mt-2 mb-5">Register now!</h1>
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            {/* name  */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input w-full" required placeholder="Name" />

                            {/* email  */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full" required placeholder="Email" />

                            {/* photo  */}
                            <label className="label">Photo</label>
                            <input type="text" name='photo' className="input w-full" required placeholder="Photo" />

                            {/* password  */}
                            <label className="label">Password</label>
                            <div className='flex items-center relative'>
                                <input type={showPassword ? "text" : "password"} name='password' className="input w-full" required placeholder="Password" />
                                <button onClick={handleShowPassword} className='absolute top-2 right-5 text-2xl text-primary'>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                            </div>

                            <button className="btn btn-primary mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className='mt-2 text-center'>Already have an Account? Please <Link className='underline text-primary font-bold' to="/logIn">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;