import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import "./home.css";
const Onecourses = () => {
    const coursesDetailData=useLoaderData();
    console.log(coursesDetailData);
    const {image,title,catagory_id}=coursesDetailData;
    return (
        <div className='container mt-5'>
            <div className="d-flex ">
            <img src={image} className="detail-img" alt="..."></img>
            <h1 className='ms-5'>{title}</h1>
            </div>
            <Link to={`/courses/${catagory_id}`} className='btn btn-primary'>Back</Link>
        </div>
    );
};

export default Onecourses;