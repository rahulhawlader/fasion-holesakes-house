import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Loading from '../Shared/Loading';

const CartRow = ({ order, index }) => {
    const [deleteOrders, setDeleteOrders] = useState();
    const { _id, name, dressName, img, price, pcs, size, totalAmount } = order;


    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure?')

        if (proceed) {
            const url = `https://radiant-tor-70020.herokuapp.com/order/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainig = deleteOrders.filter(orders => orders._id !== id)
                    setDeleteOrders(remainig)

                })
        }

        window.location.reload(false)
    }

    // if(){
    //   return <Loading/>
    // }

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-32 rounded">
                    <img src={img} alt="" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{dressName}</td>
            <td>{size}</td>
            <td>{pcs}</td>
            <td>{price}</td>
            <td>{totalAmount}</td>



            <td>{!order.paid && <button
                onClick={() => handleDelete(order._id)}
                className='btn btn-xs btn-error'
            >Remove</button>}
            </td>
            <td>
                {(price && !order.paid) && <Link to={`/payment/${_id}`}><button className='btn btn-xs btn-primary'>Pay</button></Link>}

                {(price && order.paid) && <div>

                    <span className='text-success'>Paid</span>
                    <p>Transaction Id: <span className='text-success'>{order.transactionId}</span></p>

                </div>}

            </td>

        </tr>
    );
};
export default CartRow;