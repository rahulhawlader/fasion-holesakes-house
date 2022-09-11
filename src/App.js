import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './componets/Shared/Header/Header';
import Home from './componets/Home/Home/Home';
import Footer from './componets/Shared/Header/Footer';
import ContackSection from './componets/Contack/ContackSection';
import Shop from './componets/Shop/Shop';
import DressDetails from './componets/Details/Dress/DressDetails';



function App() {
  return (
    <div className=''>
      <div className=''>

        <Header></Header>
        <Routes >
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>

          <Route path='/dresses/:dressesId' element={<DressDetails />}></Route>
          <Route path='/contack' element={<ContackSection />}></Route>
          <Route path='/shop' element={<Shop />}></Route>


        </Routes>

      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
