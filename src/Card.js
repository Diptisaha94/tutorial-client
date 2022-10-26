import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    console.log(card);
    return (
        <div className='col-lg-6'>
            <div className="card" style={{width:"18rem"}}>
  <img style={{height:"300px"}} src={card.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    {/* <h5 className="card-title">{card.title}</h5> */}
  </div>
  <Link to={`/detail/course/${card._id}`} className='btn btn-primary'>Start Tutoial</Link>
</div>
        </div>
    );
};

export default Card;