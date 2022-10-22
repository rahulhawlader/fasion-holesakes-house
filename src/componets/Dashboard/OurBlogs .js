import React from 'react';
import Marquee from "react-easy-marquee";


const OurBlogs = () => {

 return (
  <div className='text-black font-bold'>
   <Marquee duration={20000} text='white' height="90px">
    <div><p>for Admin panel :- </p>
     <p>Email:- hawladerrahul8@gmail.com </p>
     <p>
      password:-123456 </p>  <p>Please login</p>

    </div>


   </Marquee>
  </div>
 );
};

export default OurBlogs;