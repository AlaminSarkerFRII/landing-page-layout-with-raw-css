import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className='container footer'>
                <div className='message'>
                    <div>
                        <h2>Looking for a  <br />
                        Software Partner?</h2>
                        </div>
                    <div>
                        <button className='message-button'>Start A Project</button>
                    </div>
                </div>
                <div className='footer-content'>
                        <div className="col-1"></div>
                        <div className="col-2"></div>
                        <div className="col-3"></div>
                        <div className="col-4"></div>
                </div>
            </div>
        </>
    );
};

export default Footer;