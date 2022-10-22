import React from 'react';
import Review from '../../Review/Review';
import Benner from '../Benner/Benner';
import BennerTwo from '../Benner/BennerTwo';
import BestSeller from '../BestSeller/BestSeller';
import BlogsMap from '../BlogsSecction/BlogsMap';
import Contack from '../Contack/Contack';
import FecturesProducts from '../Fecture/FecturesGroup/FecturesProducts';
import TitleCart from '../TitleSection/TitleCart';
// import './Home.css';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <TitleCart></TitleCart>
            <FecturesProducts></FecturesProducts>
            <BestSeller></BestSeller>
            <BennerTwo></BennerTwo>
            <Review/>
            <BlogsMap></BlogsMap>
            <Contack></Contack>


        </div>
    );
};

export default Home;