import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrdersRow from './OrdersRow';

const AllOrder = () => {

  const { data: order, isLoading, refetch } = useQuery('order', () => fetch(`https://radiant-tor-70020.herokuapp.com/order`, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }

  }).then(res => res.json()))

  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <h2 className='text-xl  text-black font-bold'> All Order {order.length}</h2>

      <div className="overflow-x-auto">
        <table className="table w-full text-white">

          <thead>
            <tr>
              <th></th>
              <th>Dress Picture</th>
              <th>Customer Name</th>
              <th>Dress Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>payment</th>
              <th>TransactionId</th>
            </tr>
          </thead>
          <tbody className='text-pink-400 font-bold'>

            {
              order.map((order, index) => <OrdersRow

                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
              ></OrdersRow>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrder;