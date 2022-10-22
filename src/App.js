import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './componets/Shared/Header/Header';
import Home from './componets/Home/Home/Home';
import Footer from './componets/Shared/Header/Footer';
import ContackSection from './componets/Contack/ContackSection';
import Shop from './componets/Shop/Shop';
import DressDetails from './componets/Details/Dress/DressDetails';
import Cart from './componets/Cart/Cart';
import Login from './componets/Login/Login';
import SignUp from './componets/Login/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './componets/Login/RequireAuth';
import Payment from './componets/Cart/Payment';
import Review from './componets/Review/Review';
import Dashboard from './componets/Dashboard/Dashboard';
import AllUsers from './componets/Dashboard/AllUsers';
import AllOrder from './componets/Dashboard/AllOrder';
import AllProduct from './componets/Dashboard/AllProduct';
import AddProducts from './componets/Dashboard/AddProducts';
import AddEmployee from './componets/Dashboard/AddEmployee';
import AllEmployee from './componets/Dashboard/AllEmployee';
import RequireAdmin from './componets/Login/RequireAdmin';
import OurBlogs from './componets/Dashboard/OurBlogs ';
import AllReviews from './componets/Dashboard/AllReviews';



function App() {
  return (
    <div className=''>
      <div className=''>

        <Header></Header>
        <Routes >
          <Route path='/' element={
            <RequireAuth>
              <Home />
            </RequireAuth>}>

          </Route>
          <Route path='/home' element={
            <RequireAuth>
              <Home />
            </RequireAuth>

          }></Route><Route path='/dresses/:dressesId' element={<DressDetails />}></Route>
          <Route path='/contack' element={<ContackSection />}></Route>
          <Route path='/shop' element={
            <RequireAuth>
              <Shop />
            </RequireAuth>

          }></Route>
          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>

          }>
            <Route index element={<OurBlogs />}></Route>
            
            <Route path='allCustomerReview' element={<AllReviews />}></Route>

            <Route path='allOrder' element={<RequireAdmin>
              <AllOrder />

            </RequireAdmin>}></Route>
           
            <Route path='allProduct' element={
           <RequireAdmin>
             <AllProduct />
           </RequireAdmin>
            
            
            }> </Route>


            <Route path='allEmployee' element={
              <RequireAdmin>
                <AllEmployee />
              </RequireAdmin>

            }></Route>


            <Route path='allUsers' element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>

            }></Route>

            <Route path='addProduct' element={
              <RequireAdmin>
                <AddProducts />
              </RequireAdmin>

            }></Route>


            <Route path='addEmployee' element={
              <RequireAdmin>
                <AddEmployee />
              </RequireAdmin>


            }></Route>



          </Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/review' element={<Review />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/payment/:id' element={<Payment />}></Route>


        </Routes>

      </div>
      <Footer></Footer>
      <ToastContainer />

    </div>
  );
}

export default App;
