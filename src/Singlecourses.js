import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Singlecourses = () => {
    const courseCard=useLoaderData();
    console.log(courseCard);
    return (
        <div className='row gy-4'>
            {
               courseCard.map((card)=><Card key={card._id} card={card}></Card>) 
            }
        </div>
    );
};

export default Singlecourses;