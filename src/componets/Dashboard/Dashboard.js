import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
 const [user] = useAuthState(auth)
 const [admin] = useAdmin(user)
 return (
  <div class="drawer drawer-mobile">
   <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
   <div class="drawer-content flex flex-col">

    <h2 className='text-3xl font-bold text-pink-500'>Welcome To Your DashBoard</h2>

    <Outlet />
    {/* <!-- Page content here --> */}


   </div>
   <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
     {/* <!-- Sidebar content here --> */}
     <li><Link to="/dashboard">Our Blogs</Link></li>
     <li><Link to="/dashboard/allCustomerReview">All Customer Review</Link></li>
    

     
     
     

     {admin && <>
      <li><Link to="/dashboard/allProduct">All Product</Link></li>
      <li><Link to="/dashboard/allOrder">All Order</Link></li>
      <li><Link to="/dashboard/allEmployee">All Employee</Link></li>
      <li><Link to="/dashboard/allUsers"> All User </Link></li>
      <li><Link to="/dashboard/addEmployee">Add Employee</Link></li>
      <li><Link to="/dashboard/addProduct">Add Products</Link></li>
     </>}

    </ul>

   </div>
  </div>
 );
};

export default Dashboard;