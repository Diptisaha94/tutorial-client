import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;