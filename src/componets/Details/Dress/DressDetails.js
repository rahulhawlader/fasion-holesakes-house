import React from 'react';
import { useState } from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';

// import { useParams } from 'react-router-dom';

// asassasasas sasasas sasass saass sas 

const DressDetails = ({ girlsDressDetails }) => {

    const { name, price, img } = girlsDressDetails

    const handleSubmit = (e) => {
        e.preventDefault()




    }


    // sasa sasa s sa sass s a==>


    return (
        <div>


            <input type="checkbox" id="girls-dress" class="modal-toggle " />
            <div class="modal modal-bottom sm:modal-middle  ">
                <div class="modal-box w-screen grid lg:grid-cols-2 sm:grid-cols-1  md:grid-cols-2 lg:w-auto lg:h-auto   bg-white  ">
                    <label for="girls-dress" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className=''>
                        <img src={img} alt=""></img>
                    </div>
                    <form onSubmit={handleSubmit} className='pl-3 '>

                        <h3 name='dressName' class="font-bold my-2  text-2xl">{name}</h3>
                        <div class="rating flex my-2 justify-center .">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <div className='text-red-400 my-2'>${price}</div>
                        <p class="py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, eaque.</p>

                        <div>

                            <div>
                                <input type="text" placeholder="Small or Xl or Xxl " class="input w-full max-w-xs bg-white" />
                            </div>
                        </div>
                        <div>
                            <div className='mt-4 flex'>

                                <input type="text" placeholder="Quantity" class="input w-full max-w-xs bg-white" />

                            </div>
                            <button className='btn btn-secondary  border mt-2 w-full bg-red-400 p-2  border-gray-300 text-white'>ADD TO CARD</button>


                        </div>

                    </form>


                </div>
            </div>
        </div>
    );
};

export default DressDetails;