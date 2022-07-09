import React from 'react';
import "./Banner.css"
import banner from "../../assets/img/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working 1.png"
import video from "../../assets/img/Ellipse 4.png"
import {BiPlay} from "react-icons/bi"

const Banner = () => {
    return (
        <div className="container banner">
            <div className="row">
                <div className="">
                    <h1>Software services for <br />
                        startups without <br />
                        limits..
                    </h1>
                    <p>We believe that great design should not be out of reach, so our services <br /> are less than half the price of a full-time designer.</p>
                </div>
                <div className="banner-content">
                    <div className='main-banner'>
                        <img src={banner} alt="" />
                        <div className="video-button">
                            {/* <img src={video} alt="" /> */}
                            <BiPlay className='play-btn'/> 
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;