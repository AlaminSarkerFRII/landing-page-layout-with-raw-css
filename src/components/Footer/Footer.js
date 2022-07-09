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
                    <div className='address-section'>
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
                        <h3 class="footer-title">Company</h3>
                        <div class="link link-hover">About us</div>
                        <div class="link link-hover">Our portfolio</div>
                        <div class="link link-hover">Our Product</div>
                        <div class="link link-hover">Our Team</div>
                        <div class="link link-hover">Our Priceing</div>
                        <div class="link link-hover">Testimonials</div>
                        <div class="link link-hover">Contact Us</div>
                    </div>
                    <div className='col-3'>
                        <h3 class="footer-title">Our Service</h3>
                        <div class="link link-hover">Marketing</div>
                        <div class="link link-hover">UI/UX Design</div>
                        <div class="link link-hover">Graphic Design (Branding)</div>
                        <div class="link link-hover">Development</div>
                        <div class="link link-hover">New Products</div>
                    </div>
                    <div className='col-4'>
                        <h3 class="footer-title">Supports</h3>
                        <div class="link link-hover">FAQs</div>
                        <div class="link link-hover">Support Policy</div>
                        <div class="link link-hover">Privacy Policy</div>
                        <div class="link link-hover">Trams of Service</div>
                        <div class="link link-hover">Refund Policy</div>
                    </div>
                </div>
                <hr />
                <div class="footer-button">
                    © 2022, Softcent EU, A European IT company
                </div>

            </div>
        </>
    );
};

export default Footer;