import React from 'react';

const OrdersRow = ({order, index, refetch}) => {
 const {img, name, dressName,size, price, pcs, totalAmount, paid, transactionId }=order;
 return (
  <tr>
   <th>{index + 1}</th>
   <td><div className="avatar">
      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100  mr-5">
       <img src={img} alt="" />
      </div>
     </div></td>
   <td>{name}</td>
   <td>{dressName}</td>
   <td>{size}</td>
   <td>{price}</td>
   <td>{pcs}</td>
   <td>{totalAmount}</td>
   <td>{(price && !paid ) && <p className='text-red-300'>Panding</p>}
   
   {(price && paid ) && <p className='text-green-300'>paid</p>}
   </td>
   <td>{transactionId}</td>
  </tr>
 );
};

export default OrdersRow;