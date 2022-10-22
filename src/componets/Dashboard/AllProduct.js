import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

import Loading from '../Shared/Loading';
import AllProductRow from './AllProductRow';



const AllProduct = () => {



  const { data: girlsDreses, isLoading } = useQuery('girlsDreses', () => fetch('https://radiant-tor-70020.herokuapp.com/girlsdress', {
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));


  if (isLoading) {
    return <Loading />
  }





  return (
    <div>
      <h2 className='text-xl  text-black font-bold'> Our All Products: {girlsDreses.length}</h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {
          girlsDreses.map(dress => <AllProductRow
            key={dress._id}

            dress={dress}



          ></AllProductRow>)
        }
      </div>





    </div>
  );
};

export default AllProduct;