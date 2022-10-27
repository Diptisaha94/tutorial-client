import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Primeum = () => {
    const premiumData =useLoaderData();
    console.log(premiumData);
    const{title}=premiumData;
    return (
        <div className='container mt-5'>
            <h1>{title}</h1>
        </div>
    );
};

export default Primeum;