import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Popular = () => {
    return (
        <div className='d-flex justify-content-between'>
            <h1 className='text-primary'>Our Pupular Courses</h1>
            <Link to={'/premium'} className="btn align-center my-auto btn-outline-primary">Get Premium Access</Link>
        </div>
    );
};

export default Popular;