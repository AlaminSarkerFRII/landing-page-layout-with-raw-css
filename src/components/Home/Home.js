import React from 'react';
import Header from '../Header/Header';
import Banner from './Banner';
import Customers from './Customers';
import Works from './Works';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Customers/>
           <Works/>
        </div>
    );
};

export default Home;