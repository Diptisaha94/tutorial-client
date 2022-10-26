import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import Catagory from './Catagory';
import Popular from './Popular';


const Courses = () => {
    const coursesData = useLoaderData();
    console.log(coursesData);
    //const {name}=coursesData;
    //console.log(name);
    return (
        <div className='mt-5'>
           <Container>
            <Popular></Popular>
            <Row className='mt-5'>
                <Col lg="4">
            <Catagory></Catagory>
                </Col>
                <Col lg="8">
                    <Outlet>
                    </Outlet>
                </Col>
            </Row>
           </Container>
        </div>
    );
};

export default Courses;