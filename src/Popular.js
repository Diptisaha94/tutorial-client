import React from 'react';
import { Button } from 'react-bootstrap';

const Popular = () => {
    return (
        <div className='d-flex justify-content-between'>
            <h1 className='text-primary'>Our Pupular Courses</h1>
            <Button variant="outline-primary">Get Premium Access</Button>
        </div>
    );
};

export default Popular;