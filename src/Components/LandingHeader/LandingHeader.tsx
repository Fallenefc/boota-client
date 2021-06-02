import React, { useState } from 'react';
import logo from '../../Assets/logo2.svg';
import './styles.css';

export const LandingHeader = () => {

    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    return (
        <div className="landing-header">
            <div className="left-content">
                <a href="/">
                    <img src={logo} height="70px" alt="logo" />
                </a>
            </div>
            <div className="middle-content">
                <a href='/'>
                    <span>Home</span>
                </a>
                <a href='/pricing'>
                    <span>Pricing</span>
                </a>
                <a href='/about'>
                    <span>About Us</span>
                </a>
                <a href='/contact'>
                    <span>Contact</span>
                </a>
            </div>
            <div className="right-content">
                <a href="/login">
                    <button className="login-btn" name="login" type="button">
                        Log In
                    </button>
                </a>
            </div>
            <div className="mobile-menu">
                <i className="fa fa-bars" onClick={toggleDropdown}></i>
                { dropdown ?
                <div className="dropdown-content">
                    <i className="fa fa-times modal-close" onClick={toggleDropdown}></i>
                    <section className='anchors'>
                        <a href='/'>Home</a>
                        <a href='/pricing'>Pricing</a>
                        <a href='/about'>About Us</a>
                        <a href='/contact'>Contact</a>
                    </section>
                    <section className="login">
                        <a>Login</a>
                    </section>
                </div>
                : null
                }
            </div>
        </div>
    )
}
