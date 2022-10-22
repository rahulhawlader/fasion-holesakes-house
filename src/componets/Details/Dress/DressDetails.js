
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init'

const DressDetails = ({ girlsDressDetails, setGirlsDressDetails }) => {
    const [user] = useAuthState(auth);
    const [quantity, setQuantity] = useState(1);
    const [btnDisable, setBtnDisable] = useState(false);
    const { name, price, img } = girlsDressDetails


    const handleQuantity = e => {
        setQuantity(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const quantity = e.target.quantity.value;
        const totalAmount = parseFloat(quantity) * parseFloat(price);

        if (quantity <= 0) {
            setBtnDisable(true)
            toast.error('Please minimum one quantity order')
        }



        else {
            // setBtnDisable(false)
            const orderForm = {
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                dressName: name,
                img: img,
                price: price,
                pcs: e.target.quantity.value,
                size: e.target.size.value,
                totalAmount: totalAmount
            }

            fetch('https://radiant-tor-70020.herokuapp.com/order', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderForm)
            })
                .then(res => res.json())
                .then(data => {


                    if (data) {
                        toast('Order is success')
                    }
                    else {
                        toast.error('order is unsuccessFull')
                    }



                    console.log('order Done');
                    setGirlsDressDetails(null)
                })

        }



    }



    useEffect(() => {
        if (quantity >= 1) {
            setBtnDisable(false)
        }
    }, [quantity])

    // sasa sasa s sa sass s a==>


    return (
        <div>


            <input type="checkbox" id="girls-dress" className="modal-toggle " />
            <div className="modal modal-bottom sm:modal-middle  ">
                <div className="modal-box w-screen grid lg:grid-cols-2 sm:grid-cols-1  md:grid-cols-2 lg:w-auto lg:h-auto   bg-white  ">
                    <label for="girls-dress" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className=''>
                        <img src={img} alt=""></img>
                    </div>
                    <form onSubmit={handleSubmit} className='pl-3 '>

                        <h3 name='dressName' className="font-bold my-2  text-2xl">{name}</h3>
                        <div className="rating flex my-2 justify-center .">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <div className='my-2 '><h2 className='text-xl'>Price:- <span className='text-red-400 font-bold'> ${price}</span> </h2></div>


                        <div>


                            <input

                                name="name"
                                type="text"
                                value={user.displayName}
                                disabled
                                className="input w-full max-w-xs bg-white text-white font-bold"
                            />

                            <input

                                name="email"
                                type="email"
                                value={user.email}
                                disabled
                                className="input w-full max-w-xs mt-2 bg-white text-white font-bold"
                            />

                            <input

                                name="phone"
                                type="number"
                                placeholder="Please Your Phone Number"
                                className="input w-full max-w-xs bg-white"
                            />
                            <input

                                name="size"
                                type="text"
                                placeholder="Small or Xl or Xxl "
                                className="input w-full max-w-xs bg-white"
                            />




                            <input

                                onChange={handleQuantity}
                                name='quantity'
                                type="text"
                                placeholder="Quantity"
                                className="input w-full max-w-xs bg-white"
                            />


                            <button disabled={btnDisable} className='btn btn-secondary  border mt-2 w-full bg-red-400 p-2  border-gray-300 text-white'>ADD TO CARD</button>


                        </div>

                    </form>


                </div>
            </div>
        </div>
    );
};

export default DressDetails;