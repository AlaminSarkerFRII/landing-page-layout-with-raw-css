import React from 'react';
import "./Header.css"
import logo from "../../assets/img/logo-v2 1.png"

const Header = () => {
    return (
        <header className="header-content">
            <div className='container'>
                <nav className='header-logo'>
                    <img src={logo} alt="" />
                    <ul className='header-items'>
                        <li><a href="#">Home</a> </li>
                        <li><a href="#">About</a> </li>
                        <li><a href="#">Work</a> </li>
                        <li><a href="#"> premium products </a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                <a href="#" ><button>Start a project</button></a>
                </nav>
            </div>
        </header>
    );
};

export default Header;