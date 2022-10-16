
import GirlsCard from './GirlsCard';
// import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FecturesProducts.css'
import useGirlsDresses from '../../../../Hooks/useGirlsDresses';
import { useState } from 'react';
import DressDetails from '../../../Details/Dress/DressDetails';


const FecturesProducts = () => {
    const [girlsDreses] = useGirlsDresses([])
    const [girlsDressDetails, setGirlsDressDetails] = useState(null)



    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };




    return (
        <div className='bg-white'>
            <div className='w-11/12 mx-auto py-5'>
                <div className='text-center '>
                    <h6 className='text-xl text-gray-500 '>FASION COLLECTIONS</h6>
                    <h3 className='text-4xl font-bold'> FEATURED Products</h3>
                    <h1 className='text-xl'>Lorem, ipsum dolor sit amet adipisicing elit. Porro, assumenda.</h1>


                </div>
                <div className='flex justify-center '>
                    <div className='m-2 '><a href='/FecturesProducts'>Womens</a></div>
                    <div className='m-2 '><a href='#' >Mens</a> </div>
                    <div className='m-2 '><a href='#'> Kids</a> </div>
                </div>
                {/* ref={carousel} */}

                {/* grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  */}
                <div className='lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-6'>
                    <Slider {...settings}>

                        {
                            girlsDreses.map(girlsDres => <GirlsCard
                                key={girlsDres._id}
                                girlsDres={girlsDres}
                                setGirlsDressDetails={setGirlsDressDetails}
                            ></GirlsCard>)
                        }


                    </Slider>


                </div>
                {girlsDressDetails && <DressDetails girlsDressDetails={girlsDressDetails} 
                
                setGirlsDressDetails={setGirlsDressDetails}
                
                ></DressDetails>}
            </div>

            {/* <div className='buttons   text-2xl text-center'>
                <button onClick={handlePreClick} className='pre-btn mx-20   font-bold'> ❮ </button>
                <button onClick={handleNextClick} className='next-btn mx-20  font-bold'>❯</button>
            </div> */}
        </div>
    );
};

export default FecturesProducts;