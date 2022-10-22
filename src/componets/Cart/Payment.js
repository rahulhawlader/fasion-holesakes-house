import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L41anBQZYjn6cSxMdp5BdALVevV4wZo9Btuf6IhPfB7VawZNfAxgeqWt2FJtXX67dA2PKoWZB8nNa7VYeppexoT00MrTrs91h');

const Payment = () => {
 const { id } = useParams()

 const url = `https://radiant-tor-70020.herokuapp.com/order/${id}`;

 const { data: order, isLoading } = useQuery(['orders', id], () => fetch(url, {
  method: "GET"
 }).then(res => res.json()))

 if (isLoading) {
  return <Loading />
 }
 return (
  <div className='flex h-screen justify-center items-center  '>

   <div>
    <div className="card w-96 max-w-md  shadow-2xl px-1 my-12 bg-black">
     <div className="card-body">
      <p className='text-success text-bold'>Hello, {order.name}</p>
      <div className="avatar">
       <div className="w-20 rounded">
        <img src={order.img} alt="" />
       </div>
      </div>
      <h2 className="card-title text-pink-400 ">Dress: {order.dressName}</h2>
      <p className=" text-pink-400 ">Price: <span className='text-red-600'>${order.price}</span></p>
      <p className=" text-pink-400 ">Quantity: {order.pcs}</p>

      <p className='text-pink-400 '>Please Pay: <span className='text-red-600'>${order.totalAmount}</span></p>

     </div>
    </div>
    <div className="card flex-shrink-0 w-96  px-1   max-w-md shadow-2xl bg-black">
     <div className="card-body sm:w-80">

      <Elements stripe={stripePromise}>
       <CheckoutForm order={order} />
      </Elements>

     </div>
    </div>




   </div>
  </div>
 );
};

export default Payment;