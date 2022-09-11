import React, { useEffect, useState } from 'react';
import BlogsCard from './BlogsCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogsMap = () => {
    const [abouts, setAbouts] = useState([])

    useEffect(() => {
        fetch('BlogsCard.json')
            .then(res => res.json())
            .then(data => setAbouts(data))

    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
        <div className='bg-white' >
            <div className='w-11/12 mx-auto'>
                <div className='text-center '>
                    <p className='text-gray-400 font-bold'>FASION COLLECTIONS</p>
                    <h2 className='text-3xl font-bold my-2'>LATEST FROM BLOG</h2>
                    <p className='text-gray-400 font-bold '>Nullam gravida, dolor ac ultrices lobortis, mi dolor justo.</p>
                </div>
                <Slider {...settings}>
                    {
                        abouts.map(about => <BlogsCard
                            key={about._id}
                            about={about}
                        ></BlogsCard>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default BlogsMap;