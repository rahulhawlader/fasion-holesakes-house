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
