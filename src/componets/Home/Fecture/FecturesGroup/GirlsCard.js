import React from 'react';
// import { useNavigate } from 'react-router-dom';
import '../GirlCard.css'

const GirlsCard = ({ girlsDres, setGirlsDressDetails }) => {
    const { name, img, price, sell, _id } = girlsDres
    // const navigate = useNavigate()


    // const dressDetailsHandlar = _id => {
    //     navigate(`/dresses/${_id}`)
    // }

    return (
        <div>

            <div class="product-img ">
                <div >
                    <img className='w-72 h-72  image-thumnil' src={img} alt="" />


                    <label onClick={() => setGirlsDressDetails(girlsDres)} for="girls-dress" className="button-title">SELEACT OPTIONS

                    </label>
                </div>
                <div >
                    <p className='text-center'>{name}</p>
                    <p className='text-center'>{sell}</p>
                    <p className='text-center'>Lorem ipsum dolor sit amet.</p>
                    <div class="rating flex justify-center .">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                    </div>

                    <p className='text-rose-500 text-center mb-6'>${price}</p>
                </div>

            </div>
        </div>
    );
};

export default GirlsCard;