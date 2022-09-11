import React from 'react';
import './BlogsCard.css'

const BlogsCard = ({ about }) => {
    const { name, _id, massage, img } = about
    return (
        <div className='my-8 notice' >
            <div >
                <img className='h-auto w-auto img-hover' src={img} alt="blogs" />
                <div className='bg-red-500 w-14 text-center h-16 align-middle button-notice  text-white'>25 agust</div>
            </div>
            <div  >
                <p className='text-center text-red-500 '>{name}</p>
                <p className='text-center w-96'>{massage}</p>


            </div>
            <button className='red-more ' >RED MORE</button>
        </div>
    );
};

export default BlogsCard;