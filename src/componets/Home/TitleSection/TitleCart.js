import React from 'react';
import './titleCart.css'

const TitleCart = () => {
    return (
        <div className=' bg-white'>
            <div className='grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1  w-11/12 mx-auto '>


                <div className='card h-72 mt-5 w-auto  girls-background  grid place-items-center    shadow-xl transform duration-75 hover:scale-95'>
                    <button className='btn btn-primary '>women</button>
                </div>
                <div className='card boys-background  mt-5 h-72 w-auto img-hover grid place-items-center  shadow-xl
            transform duration-75 hover:scale-95
            '>

                    <button className='btn btn-primary '>Man</button>
                </div>
                <div className='card avarage-background  grid place-items-center h-72 w-auto mt-5   shadow-xl
            
            '>

                    <button className='btn btn-primary '>Couple</button>
                </div>


            </div>
        </div>
    );
};

export default TitleCart;