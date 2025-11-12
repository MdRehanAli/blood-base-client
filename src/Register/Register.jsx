import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Register = () => {

    const { createUser } = use(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("User Login Success", user)
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
                            <input type="text" name='name' className="input" required placeholder="Name" />

                            {/* email  */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" required placeholder="Email" />

                            {/* photo  */}
                            <label className="label">Photo</label>
                            <input type="text" name='photo' className="input" required placeholder="Photo" />

                            {/* password  */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" required placeholder="Password" />

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