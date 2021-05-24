import React from 'react';
import logo from '../../Assets/logo2.svg';
import './styles.css';

export const LandingHeader = () => {

    return (
        <div className="landing-header">
            <div className="left-content">
                <a href="/about">
                    <span>About</span>
                </a>
                <a href='/contact'>
                    <span>Contact</span>
                </a>
            </div>
            <div className="middle-content">
                <img src={logo} height="70px" alt="logo" />
            </div>
            <div className="right-content">
                <a href="/login">
                    <button className="login-btn" name="login" type="button">
                        Log In
                    </button>
                </a>
                <a href="/signup">
                    <button className="signup-btn" name="signup" type="button">
                        Sign Up
                    </button>
                </a>
            </div>
            <div className="mobile-menu">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    )
}
