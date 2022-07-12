import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Customers from '../Customers/Customers';
import DesignTechnology from '../DesignTechnology/DesignTechnology';
import DevTechnology from '../DevTechnology/DevTechnology';
import Packages from '../Packages/Packages';
import Portfolio from '../Portfolio/Portfolio';
import Products from '../Products/Products';
import WorkFlow from '../WorkFlow/WorkFlow';
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
           <DevTechnology/>
           <DesignTechnology/>
           <WorkFlow/> 
        </div>
    );
};

export default Home;