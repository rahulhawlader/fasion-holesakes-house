import React, { useEffect, useState } from 'react';
import Review from './Review';

const AllReviews = () => {
  const [reviews, setReviews] = useState([])


  // const nameRef = useRef(null)
  // const companyRef = useRef(null)
  // const discriptionRef = useRef(null)


  useEffect(() => {
    fetch(`https://radiant-tor-70020.herokuapp.com/review`, {
      method: 'GET'
    })

      .then(res => res.json())
      .then(data => {

        setReviews(data)


      })
  }, [])


  return (
    <div>
      <h2 className='text-xl  text-black font-bold'> Our Customer Reviews: {reviews.length}</h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
        {
          reviews.map(review => <Review
            key={review}
            review={review}

          ></Review>)
        }
      </div>

    </div>
  );
};

export default AllReviews;