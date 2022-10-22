import React from 'react';
import './BestSellerCard.css'


const BestSellerCard = ({ bestSellers }) => {
    const { name, img, price, sell } = bestSellers;
    return (
        <div>
            <div className="product">
                <div>
                    <img className='w-72 h-72' src={img} alt="dress" />
                    <button className='button' >ADD TO CARD</button>
                </div>
                <div >
                    <p className='text-center'>{name}</p>
                    <p className='text-center'>{sell}</p>
                    <p className='text-center'>Lorem ipsum dolor sit amet.</p>
                    <div className="rating flex justify-center .">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                    </div>
                    <p className='text-rose-500 text-center mb-6'>${price}</p>
                </div>

            </div>
        </div>
    );
};

export default BestSellerCard;