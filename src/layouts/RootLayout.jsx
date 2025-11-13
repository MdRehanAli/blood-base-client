import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Loading from '../components/Loading/Loading';

const RootLayout = () => {
    const navigation = useNavigation();
    console.log(navigation.state);


    return (
        <div>
            <Navbar></Navbar>
            {
                navigation?.state == 'loading' ?
                    <Loading></Loading>
                    :
                    <Outlet></Outlet>
            }
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RootLayout;