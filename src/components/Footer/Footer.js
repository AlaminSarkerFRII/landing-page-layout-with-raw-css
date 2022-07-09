import React from 'react';
import "./Footer.css"
import logo from "../../assets/img/logo-v2 1.png"
import {
    AiOutlineWhatsApp,
    AiFillFacebook,
    AiOutlineTwitter,
    AiFillLinkedin
} from "react-icons/ai"

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
                    <div className='col-1'>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <div>
                            <p>Get a fully stacked design team that will give you accessible design, exhaustive research, and an outstanding experience.</p>
                            <b />
                            <p>Email: info@softcent.eu</p>
                            <b />
                            <p>Phone: +(372) 57836500</p>
                            <div className="social-icons">
                                <AiOutlineWhatsApp className="social-icons-whatsapp  icons" />
                                <AiFillFacebook className="social-icons-facebook  icons" />
                                <AiOutlineTwitter className="social-icons-twitter icons" />
                                <AiFillLinkedin className="social-icons-linkedin icons" />
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <h3 class="footer-title">Services</h3>
                        <div class="link link-hover">Branding</div>
                        <div class="link link-hover">Design</div>
                        <div class="link link-hover">Marketing</div>
                        <div class="link link-hover">Advertisement</div>
                    </div>
                    <div className='col-3'>
                        <h3 class="footer-title">Services</h3>
                        <div class="link link-hover">Branding</div>
                        <div class="link link-hover">Design</div>
                        <div class="link link-hover">Marketing</div>
                        <div class="link link-hover">Advertisement</div>
                    </div>
                    <div className='col-4'>
                        <h3 class="footer-title">Services</h3>
                        <div class="link link-hover">Branding</div>
                        <div class="link link-hover">Design</div>
                        <div class="link link-hover">Marketing</div>
                        <div class="link link-hover">Advertisement</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;