import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';

// import { useParams } from 'react-router-dom';



const DressDetails = ({ girlsDressDetails }) => {

    const { _id, name, color, price, img } = girlsDressDetails
    // const { dressesId } = useParams()

    // const [girlsDreses, setGirlsDreses] = useState({});


    // useEffect(() => {
    //     const url = `http://localhost:5000/girlsdress/${dressesId}`;

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setGirlsDreses(data))

    // }, [dressesId])





    return (
        <div>


            <input type="checkbox" id="girls-dress" class="modal-toggle " />
            <div class="modal modal-bottom sm:modal-middle  ">
                <div class="modal-box w-screen grid lg:grid-cols-2 sm:grid-cols-1  md:grid-cols-2 lg:w-auto lg:h-auto   bg-white  ">
                    <label for="girls-dress" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className=''>
                        <img src={img} alt=""></img>
                    </div>
                    <div className='pl-3 '>

                        <h3 class="font-bold my-2  text-2xl">{name}</h3>
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
                                <p>Size</p>
                            </div>
                            <div>
                                <button className='text-white bg-red-400 mr-1 p-2'>Small</button>
                                <button className='text-white bg-red-400 mr-1 p-2'>Medum</button>
                                <button className='text-white bg-red-400 mr-1 p-2'>Large</button>
                                <button className='text-white bg-red-400 p-2 mt-2'>Extra Large</button>
                            </div>
                        </div>
                        <div>
                            <div className='mt-4 flex'>
                                <button className='py-3 px-2 font-bold border border-gray-300 hover:text-white hover:bg-red-400'>+</button>
                                <p className='block border py-3 px-4'>0</p>
                                <button className='border py-3 px-2 font-bold border-gray-300 hover:bg-red-400 hover:text-white'>-</button>


                            </div>
                            <button className='border mt-2 bg-red-400 p-2  border-gray-300 text-white'>ADD TO CARD</button>
                            <button className='border  bg-red-400 p-2  border-gray-300 text-white'>BUY NOW</button>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default DressDetails;