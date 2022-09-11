import React from 'react';
import BestSellers from '../../../Hooks/BestSellers';
import BestSellerCard from './BestSellerCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BestSeller = () => {
    const [bestSellerses] = BestSellers([]);


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


                <div className='text-center  '>
                    <h6 className='text-xl text-gray-500 '>FASION COLLECTIONS</h6>
                    <h3 className='text-4xl font-bold'>OUR BESTSELLER</h3>
                    <h1 className='text-xl'>Lorem, ipsum dolor sit amet adipisicing elit. Porro, assumenda.</h1>


                </div>

                <div className='lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-6'>
                    <Slider {...settings}>
                        {
                            bestSellerses.map(bestSellers => <BestSellerCard
                                key={bestSellers._id}
                                bestSellers={bestSellers}
                            ></BestSellerCard>)
                        }
                    </Slider>
                </div>
            </div>

        </div>
    );
};

export default BestSeller;