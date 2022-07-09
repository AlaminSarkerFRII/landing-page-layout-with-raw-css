import React from 'react';
import "./Products.css"
import mock1 from "../../assets/img/Mockup 1.png"
import mock2 from "../../assets/img/Mockup2.png"

const Products = () => {
    return (
        <div className="product-content">
            <div className="container">
                <div className="product-title">
                    <h2>Our Products </h2>
                </div>
                <div className="product-description">
                    <p>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
                    <button className="btn btn-primary">See All</button>
                </div>

                <div className="product-row">
                    <div className="product col-1">
                        <div className="product-detail">
                            <h2>SwipeXYZ Product</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div><button className='product-button'>View product</button></div>
                        </div>
                        <div className="product-image">
                            <img src={mock1} alt="mobile" />
                        </div>
                    </div>
                    <div className="product col-1">
                        <div className="product-image-2">
                            <img src={mock2} alt="mobile" />
                        </div>
                        <div className="product-detail-2">
                            <h2>Cashback Product</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div><button className='product-button'>View product</button></div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Products;