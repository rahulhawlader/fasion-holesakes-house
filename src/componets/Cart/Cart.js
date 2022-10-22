
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CartRow from './CartRow';


const Cart = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    // if(user){

    //     const { data: order, isLoading, refetch } = useQuery('order', () => fetch(`https://radiant-tor-70020.herokuapp.com/order?email=${user.email}`, {
    //     method: "GET"
    //    }).then(res => res.json()))
    // }


    useEffect(() => {
        if (user) {
            fetch(`https://radiant-tor-70020.herokuapp.com/myorder?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }

            })

                .then(res => {
                    console.log('res', res);

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/login')


                    }



                    return res.json()

                })
                .then(data => {
                    setOrders(data)










                })




        }

    }, [navigate, user])






    return (
        <div className='bg-white'>
            <h2 className='text-2xl text-pink-400 text-center font-bold'>My All orders: {orders.length}</h2>
            <div className="overflow-x-auto  ">
                <table className="table w-full">

                    <thead className='text-black text-green-400'>
                        <tr>
                            <th></th>
                            <th>Dress Pictures</th>
                            <th>Customer Name</th>
                            <th>Dress Name</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Remove</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody className='text-white'>


                        {

                            orders.map((order, index) => <CartRow
                                key={order._id}
                                order={order}
                                index={index}


                            ></CartRow>)


                        }






                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Cart;