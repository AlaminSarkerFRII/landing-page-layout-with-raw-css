import React from 'react';
import "./AboutUs.css"
import Elips from "../../assets/img/Ellipse 6.png"
import ManElips from "../../assets/img/Ellipse 5.png"

const AboutUs = () => {
    return (
        <>
            <div className="container about-title">
                <h2>Talk About As</h2>

                <div className="about-description">

                    <div className="about-left">
                        <div className='left-detail'>
                            <p>We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with.</p>
                        </div>
                        <div className="user-profile">
                            <div className="user-imgs">
                                <img src={ManElips} alt="banner" />
                            </div>
                            <div className="user-title">
                                <h4>Shuvo Roy</h4>
                                <p>Softcent Co-Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-right">
                        <img src={Elips} alt="banner" />
                    </div>

                </div>
            </div>
        </>
    );
};

export default AboutUs;