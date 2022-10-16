
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Cart = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)
    // const {name,dressName, img, price, pcs, size, totalAmount}=orders;


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',

            })

                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                })
        }

    }, [user])


    return (
        <div className='bg-white'>
            <h2 className='text-2xl text-pink-400 text-center font-bold'>My All orders: {orders.length}</h2>
            <div class="overflow-x-auto  ">
                <table class="table w-full">

                    <thead className='text-black text-green-400'>
                        <tr>
                            <th></th>
                            <th>Pictures</th>
                            <th>Name</th>
                            <th>Order</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>


                        {
                            orders.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td><div class="avatar">
                                    <div class="w-32 rounded">
                                        <img src={a.img} alt="" />
                                    </div>
                                </div></td>
                                <td>{a.name}</td>
                                <td>{a.dressName}</td>
                                <td>{a.size}</td>
                                <td>{a.pcs}</td>
                                <td>{a.price}</td>
                                <td>{a.totalAmount}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/pyment/${a._id}`}><button className='btn btn-xs btn-primary'>Pay</button></Link>}
                                    {(a.price && a.paid) && <span className='text-success'>Paid</span>}

                                </td>

                            </tr>)
                        }






                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Cart;