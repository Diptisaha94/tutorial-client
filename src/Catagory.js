import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Catagory = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('https://tutorial-server-bice.vercel.app/catagory')
        .then(response => response.json())
  .then(data => setCourses(data))
    },[])
    return (
        <div>
            {
                    courses.map((course)=><p key={course.id}>
                        <Link className='text-decoration-none fs-5' to={`/courses/${course.id}`}>{course.name}</Link>
                    </p>)
                }
        </div>
    );
};

export default Catagory;