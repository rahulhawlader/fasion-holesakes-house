import React from 'react';

const Benner = () => {



    return (
        <div className='bg-white  pb-10'>
            <div className="carousel w-11/12 mx-auto ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/F56RB5x/1000-F-232018976-HPza-OBuk8f-Sjisx-DBZ0znq-Jib-IVg7-RSE.jpg" className="w-full" alt='' />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/nrF8tXk/front-view-woman-with-shopping-bag-concept-23-2148674158.webp" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/XbtXbrd/woman-holding-various-shopping-bags-copy-space-23-2148674122.webp" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Benner;