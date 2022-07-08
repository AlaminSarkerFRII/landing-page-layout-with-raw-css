import React from 'react';
import "./Customers.css"
import logo1 from "../../assets/img/image 1.png"
import logo2 from "../../assets/img/image 2.png"
import logo3 from "../../assets/img/image 3.png"
import logo4 from "../../assets/img/image 4.png"

const Customers = () => {
    return (
        <div className="container">
            <div className="customers-title">
                <h2>Our Customers</h2>
            </div>
            <div className="customers-logo">
                <img src={logo1} className="customers-logo1" alt="" />
                <img src={logo2} className="customers-logo2" alt="" />
                <img src={logo3} className="customers-logo3" alt="" />
                <img src={logo4} className="customers-logo4" alt="" />
            </div>
        </div>
    );
};

export default Customers;