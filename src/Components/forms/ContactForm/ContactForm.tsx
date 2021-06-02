import React from 'react';
import './styles.css';

export const ContactForm = () => {

    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type='text' name='name' placeholder='Your name' required/>
            <label htmlFor="name">Email</label>
            <input type='email' name='email' placeholder='Your email' required/>
            <label htmlFor="name">Message</label>
            <textarea name="message" placeholder="Your message here...">
            </textarea>
            <button>Submit</button>
        </form>
    )
}
