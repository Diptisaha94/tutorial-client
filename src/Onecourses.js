import React from 'react';
import { Button} from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import "./home.css";
const Onecourses = () => {
    const coursesDetailData=useLoaderData();
    console.log(coursesDetailData);
    const {image,title,catagory_id,_id,discripetion}=coursesDetailData;
    return (
        <div className='container mt-5'>
            <div className="d-flex justify-content-between">
            <h5 className="card-title fs-3 mb-3">{title}</h5>
            <Button type="button" class="btn btn-primary">Download Pdf</Button>
            </div>
                <div className="card mt-5">
  <img src={image} className="img-fluid"  alt="..."/>
  <div className="card-body">
    <div className="d-flex justify-content-between mb-4">
    </div>
    <p className="card-text">{discripetion}</p>
    <Link to={`/courses/${catagory_id}`} className='btn btn-primary me-4'>Back</Link>
    <Link to={`/cheakout/${_id}`} className="btn align-center my-auto btn-outline-primary">Get Premium Access</Link>
  </div>
</div>
        </div>
    );
};

export default Onecourses;