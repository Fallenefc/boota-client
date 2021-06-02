import React from 'react';
import { Footer } from '../../Components/Footer/Footer';
import { ContactForm } from '../../Components/forms/ContactForm/ContactForm';
import { LandingHeader } from '../../Components/LandingHeader/LandingHeader';
import './styles.css';
import contactImg from '../../Assets/contactus.svg';

export const Contact = () => {
    return (
        <div className="contact-page">
            <LandingHeader />
            <div className='contact-title'>
                Contact Us
            </div>
            <div className='contact-page-container'>
                <div className='contact-page-img'>
                    <img src={contactImg}></img>
                </div>
                <div className='contact-page-form'>
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}
