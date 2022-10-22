import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {

    const [user] = useAuthState(auth);



    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };


    const menuItems = <>


        <li><Link to="/home">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contack">Contack</Link></li>

        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out<span className='text-red-400'> {user.displayName}</span> </button> : <Link to="/login">My Account</Link>}</li>


    </>

    return (
        <div className='bg-white sticky top-0 z-50'>
            <div className="navbar  w-11/12 mx-auto   text-black  ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold text-black">
                            {
                                menuItems
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl font-bold"><span className='text-fuchsia-600'>F</span>asion</a>
                </div>
                <div className="navbar-center font-bold  hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {/* <li><Link to="/home">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contack">Contack</Link></li>
                        <li><Link to="/login">My Account {user.displayName} </Link></li> */}


                        {
                            menuItems
                        }



                    </ul>
                </div>
                <div className="navbar-end ">
                    <ul className="menu menu-horizontal p-0">

                        <li> <i className="fa-solid fa-magnifying-glass"></i></li>
                        <li className='bg-pink'> <i className="fa-solid fa-heart text-pink-600"></i>
                        </li>
                        <li> <Link to="/cart" ><i className="fa-solid fa-cart-arrow-down"></i></Link></li>

                        <label tabindex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        {/* <label  className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Header;