import React from 'react';
import Header from '../sharedPage/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../sharedPage/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;