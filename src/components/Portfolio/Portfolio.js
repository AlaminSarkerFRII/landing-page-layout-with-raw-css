import React from 'react';
import './Portfolio.css'
import img1 from "../../assets/img/Colory Cover 1.png"
import img2 from "../../assets/img/Colory Cover 1 (1).png"

const Portfolio = () => {
    return (
        <>
            <div className="container">
               <div className="portfolio-header">
               <div className="portfolio-title">
                <h2>Our Portfolio</h2>
                </div>
                <div className="portfolio-btn">
                    <button>Arrow</button>
                    <button>Arrow</button>
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
                            <img src={img2} alt="" />
                            <h4>Logo Design</h4>
                    </div>
               </div>
            </div>
        </>
    );
};

export default Portfolio;