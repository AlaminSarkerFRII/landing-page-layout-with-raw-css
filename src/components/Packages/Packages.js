import React from 'react';
import "./Packages.css"
import { BsCheck } from "react-icons/bs"

const Packages = () => {

    const manageList = [
        "Dedicated Designer",
        "Unlimited requests",
        "Unlimited brand profiles",
        "Native source files",
        "Real - time collaboration",
        "Banner Ads",
        "Banner Ads",
        "Clothing & Merchandise Design",
        "Packaging & Label",
        "Logo & Brand Guide",
    ]

    return (
        <div>
            <div className="container packages-title">
                <h2>Pricing Package Choose Your Plan</h2>
                <p>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
                <div className="package-btn">
                    <button className='monthly'>Monthly</button>
                    <button className='yearly'>Yearly</button>
                </div>

                {/* packages */}
                <div className="container package-description">
                    <div className="card-1">
                        <div id="package" className='package-content'>
                            <h3>Merketing</h3>
                            <h4> $800/ mo </h4>
                        </div>
                        <div className='package-items'>
                            {
                                manageList.map((manage, index) => (
                                    <div key={index} className='card-list'>
                                        <BsCheck className='card-symbol' />
                                        <div className="ml-2">
                                            {manage}
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                        <button className="price-button"> $800/ mo </button>
                    </div>
                    {/* card 2 */}
                    <div className="card-2">
                        <div id="package" className='package-content'>
                            <h3>UI/UX Design</h3>
                            <h4>$1000/ mo</h4>
                        </div>
                        <div className='package-items'>
                            {
                                manageList.map((manage, index) => (
                                    <div key={index} className='card-list'>
                                        <BsCheck className='card-symbol' />
                                        <div className="ml-2">
                                            {manage}
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                        <button className="price-button"> $800/ mo </button>
                    </div>
                    {/* card 3 */}
                    <div className="card-1">
                        <div id="package" className='package-content'>
                            <h3>Development</h3>
                            <h4>$1000/ mo</h4>
                        </div>
                        <div className='package-items'>
                            {
                                manageList.map((manage, index) => (
                                    <div key={index} className='card-list'>
                                        <BsCheck className='card-symbol' />
                                        <div className="">
                                            {manage}
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                        <button className="price-button"> $800/ mo </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;