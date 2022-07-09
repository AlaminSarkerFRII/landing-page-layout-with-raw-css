import React from 'react';
import './DevTechnology.css'
import phpLogo from "../../assets/img/php.png"
import jsLogo from "../../assets/img/js.png"
import html from "../../assets/img/html.png"
import css from "../../assets/img/css.png"
import img9 from "../../assets/img/image 9.png"

const DevTechnology = () => {
    return (
        <>
            <div className="container devTechnology-title">
                <h2>Our Dev Technology</h2>
                <div className='technology-description'>
                    <div className='technology-header'>
                        <div>Programming Languages</div>
                        <div>Frameworks</div>
                        <div>Databases</div>
                        <div>Mobile Platforms</div>
                    </div>
                    <div className="technologies-logo">
                        <div>
                            <img src={phpLogo} alt="" />
                        </div>
                        <div>
                            <img src={jsLogo} alt="" />
                        </div>
                        <div>
                            <img src={html} alt="" />
                        </div>
                        <div>
                            <img src={css} alt="" />
                        </div>
                        <div>
                            <img src={img9} alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default DevTechnology;