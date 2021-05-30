import React from 'react';
import logo from '../../Assets/logo2.svg';
import './styles.css';

export const LandingHeader = () => {

    return (
        <div className="landing-header">
            <div className="left-content">
                <img src={logo} height="70px" alt="logo" />
            </div>
            <div className="middle-content">
                <a href="/about">
                    <span>Demo</span>
                </a>
                <a href='/contact'>
                    <span>Pricing</span>
                </a>
                <a href='/contact'>
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
                <i className="fa fa-bars"></i>
            </div>
        </div>
    )
}
