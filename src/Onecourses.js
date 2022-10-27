import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import "./home.css";
const Onecourses = () => {
    const coursesDetailData=useLoaderData();
    console.log(coursesDetailData);
    const {image,title,catagory_id,discripetion}=coursesDetailData;
    return (
        <div className='container mt-5'>
                <div className="card">
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <div className="d-flex justify-content-between mb-4">
    <h5 className="card-title fs-1 mb-3">{title}</h5>
    <Button type="button" class="btn btn-primary">Download Pdf</Button>
    </div>
    <p className="card-text">{discripetion}</p>
    <Link to={`/courses/${catagory_id}`} className='btn btn-primary'>Back</Link>
  </div>
</div>
        </div>
    );
};

export default Onecourses;