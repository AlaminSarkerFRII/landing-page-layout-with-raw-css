import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Customers from '../Customers/Customers';
import Header from '../Header/Header';
import Packages from '../Packages/Packages';
import Portfolio from '../Portfolio/Portfolio';
import Products from '../Products/Products';
import Works from '../Works/Works';
import Banner from './Banner';


const Home = () => {
    return (
        <div>
           <Banner/>
           <Customers/>
           <Works/>
           <Products/>
           <Packages/>
           <AboutUs/>
           <Portfolio/>
        </div>
    );
};

export default Home;