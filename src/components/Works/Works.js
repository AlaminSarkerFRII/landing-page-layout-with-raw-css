import React from 'react';
import "./Works..css"
import img1 from "../../assets/img/branding 1.png"
import ux from "../../assets/img/UX.png"

const Works = () => {
    return (
        <div className="container">
            <div className="works-title">
                <h2>What you do ? </h2>
            </div>
            <div className="container works-description">
                <div className="card-1">
                    <div id="works" className='works-content'>
                        <img src={img1} alt=""></img>
                        <h3>Branding</h3>
                    </div>
                    <div className='works-items'>
                        <div>Brand Strategy </div>
                        <div>Marketing Assets</div>
                        <div>Presentations</div>
                        <div>Build MVP Version</div>
                        <div>Pitch Deck</div>
                    </div>
                </div>
                {/* card 2 */}
                <div children="card-1">
                    <div id="works" className='works-content'>
                        <img src={ux} alt=""></img>
                        <h3>UI/UX Design</h3>
                    </div>
                    <div className='works-items'>
                        <div>User Interface </div>
                        <div>Marketing Assets</div>
                        <div>Design System</div>
                        <div>Wireframe</div>
                        <div>Website & Mobile App</div>
                        <div>IOS + Android</div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card-1">
                    <div id="works" className='works-content'>
                        <img src={ux} alt=""></img>
                        <h3>Development</h3>
                    </div>
                    <div className='works-items'>
                        <div>Front End (HTML, CSS, React)</div>
                        <div>Backend (Node.js, MongoDB)</div>
                        <div>iOS (Swift)</div>
                        <div>Android (Kotlin, Flutter)</div>
                        <div>Blockchain Development (NFT)</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;