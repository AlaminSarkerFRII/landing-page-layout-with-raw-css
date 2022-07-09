import React from 'react';
import './Portfolio.css'
import img1 from "../../assets/img/Colory Cover 1.png"
import img2 from "../../assets/img/Colory Cover 1 (1).png"
import img3 from "../../assets/img/Mockup 1.png"
import {BiArrowBack} from "react-icons/bi"
import {FiArrowRight} from "react-icons/fi"

const Portfolio = () => {
    return (
        <>
            <div className="container">
                <div className="portfolio-header">
                    <div className="portfolio-title">
                        <h2>Our Portfolio</h2>
                    </div>
                    <div className="portfolio-btn">
                        <button className="btn-left"><BiArrowBack/></button>
                        <button><FiArrowRight/></button>
                    </div>
                </div>

                <div className='portfolio-gallery'>
                    <div className='portfolio-gallery-1'>
                        <img src={img1} alt="" />
                        <h4>Color System Design</h4>
                    </div>
                    <div className='portfolio-gallery-2'>
                        <img src={img2} alt="" />
                        <h4>Logo Design</h4>
                    </div>
                    <div className='portfolio-gallery-3'>
                        <img src={img3} alt="" />
                        <h4>UX/UI</h4>
                    </div>
                </div>
                <div className="all-photos-button">
                <button className="">See All Photos</button>
                </div>
            </div>
        </>
    );
};

export default Portfolio;