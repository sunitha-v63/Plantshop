import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Header';
import Footer from './Footer';

function MainHeader() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainHeader