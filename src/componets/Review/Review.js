import React, { useRef } from 'react';

const Review = () => {
 const nameRef = useRef(null)
 const companyRef = useRef(null)
 const discriptionRef = useRef(null)

 const reviewSubmitHandle = (event) => {
  event.preventDefault();




  const review = {
   name: event.target.name.value,
   company: event.target.company.value,
   discription: event.target.discription.value
  }


  fetch(`http://localhost:5000/review`, {
   method: 'POST',
   headers: {

    'content-type': 'application/json'
   },
   body: JSON.stringify(review)
  })

   .then(res => res.json())
   .then(result => {
    console.log(result);

    event.target.reset();
   })




 }



 return (
  <div className='bg-white'>
   <h1 className='text-xl text-center text-black font-bold'> Your Reviews</h1>
   <form onSubmit={reviewSubmitHandle} >

    <div className=' h-screen ml-20 mt-20'>

     <div className='grid grid-cols-1 justify-center text-black my-10 mx-5'>

      <h1 className='text-2xl text-secondary'>Please Your Review</h1>
      <input
       ref={nameRef}
       type="text"
       name='name'
       placeholder="Your Name"
       class="input w-full bg-white  max-w-xs mt-2"

      />



      <input
       ref={companyRef}
       type="text"
       name='company'
       placeholder="Company's Name Designation "
       class="input w-full bg-white  max-w-xs mt-2"
      />


      <textarea
       ref={discriptionRef}
       name='discription'
       class="textarea bg-white w-full max-w-xs my-2"
       placeholder="Discription"

      ></textarea>


      {/* <button type="submit" class="btn btn-active btn-secondary w-full max-w-xs">Submit</button> */}
      <input

       className='btn btn-secondary w-full max-w-xs text-white'
       type="submit"

       value="Submit"

      />

     </div>
    </div>
   </form>

  </div>
 );
};

export default Review;