import React from 'react';
import "./Banner.css"
import banner from "../../assets/img/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working 1.png"

const Banner = () => {
    return (
        <div className="container banner">
            <div className="row">
                <div className="">
                    <h1>Software services for <br/>
                        startups without <br/>
                        limits.. 
                    </h1>
                    <p>We believe that great design should not be out of reach, so our services <br/> are less than half the price of a full-time designer.</p>
                </div>
                <div className="col-2">
                    <div>
                    <img src={banner} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;