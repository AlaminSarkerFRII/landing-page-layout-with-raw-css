import React from 'react';
import Customers from '../Customers/Customers';
import Header from '../Header/Header';
import Packages from '../Packages/Packages';
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
        </div>
    );
};

export default Home;