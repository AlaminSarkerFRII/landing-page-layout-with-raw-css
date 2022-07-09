import React from 'react';
import "./DesignTechnology.css";
import figma from "../../assets/img/figma.png";
import inLogo from "../../assets/img/in.png";
import xd from "../../assets/img/xd.png";
import logoAi from "../../assets/img/ai.png";
import photoshop from "../../assets/img/photoshop.png";

const DesignTechnology = () => {
    return (
        <>
        <div className="container designTechnology-title">
                <h2>Our Design Technology</h2>
                <div className='technology-description'>
                    <div className="technologies-logo">
                        <div>
                            <img src={figma} alt="" />
                        </div>
                        <div>
                            <img src={inLogo} alt="" />
                        </div>
                        <div>
                            <img src={xd} alt="" />
                        </div>
                        <div>
                            <img src={logoAi} alt="" />
                        </div>
                        <div>
                            <img src={photoshop} alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default DesignTechnology;