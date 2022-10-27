import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;