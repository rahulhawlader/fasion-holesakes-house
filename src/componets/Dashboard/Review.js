import React from 'react';

const Review = ({review}) => {
 return (
  <div className="card w-72 mt-5 ml-5 text-black  bg-white shadow-2xl">
   <div className="card-body">
    <p>{review.discription}</p>
    <div className="flex items-center">
     <div className="avatar">
      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100  mr-5">
       <img src={review.img} alt="" />
      </div>
     </div>
     <div>
      <h4 className='text-xl'>{review.name}</h4>
      <p>{review.address}</p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Review;