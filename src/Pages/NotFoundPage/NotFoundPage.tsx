import React from 'react';
import './styles.css';
import image from '../../Assets/404.svg';
import mobileImage from '../../Assets/quizilla.svg';

export const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <div className='not-found-text'>Sorry, we could not find the page you were looking for</div>
            <div className='not-found-image-mobile'>
                <img src={mobileImage}></img>
            </div>
            <div className='not-found-image'>
                <img src={image}></img>
            </div>
            <div className='not-found-button-div'>
                <button className='not-found-button'>
                    <a href='/'>
                    Back to home
                    </a>
                </button>
            </div>
        </div>
    )
}
