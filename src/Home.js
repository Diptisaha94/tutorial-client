import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
import { FiArrowRight } from "react-icons/fi";
import bgpic from "./images/cta_1_1.png";
import { Col, Row } from 'react-bootstrap';
import aboutpic from './images/about.png';

const Home = () => {
    return (
        <>
        <div className='banner-img pb-5 pt-5'>
           <h1 className='fs-1 text-center'>Welcome To Our Online<br/>
Learning Platform</h1>
        </div>
        <div className="mt-5 container bg-light px-5">
            <Row>
                <Col lg="6">
                <img src={aboutpic} className="img-fluid" alt="..."></img>
                </Col>
                <Col lg="6">
                <h5 className='text-primary mt-5'>WHY CHOOSE US</h5>
                <h1>Let's Get Started Your Carrer With Acadu Education</h1>
                <p>Whether you know exactly where you're heading, or you're still planning your next steps, it all starts with a simple conversation. Let's talk.</p>
                </Col>
            </Row>
        </div>
        <div className="bg-img py-3 d-flex justify-content-between mt-5">
            <div className="ms-4 mt-4">
        <h2 className='mb-4 text-white'>Find Your Best Course With Us</h2>
        <p>An online coding school that invests in you. No tuition until you're hired. Terms apply. BloomTech is designed to accelerate your path to a well paying job. Get started today!</p>
        <Link to="/courses"><button className='btn btn-primary mt-4'>Find Your Course <FiArrowRight/></button></Link>
            </div>
        <img src={bgpic} className="img-fluid" alt="..."></img>
        </div>
        </>
    );
};

export default Home;