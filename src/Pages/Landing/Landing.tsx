import React, { ReactElement } from 'react';
import './styles.css';
import landingHero from '../../Assets/landing-hero.svg';
import { LandingHeader } from '../../Components/LandingHeader/LandingHeader';
import { useHistory } from 'react-router-dom';
import { Footer } from '../../Components/Footer/Footer';

export default function Landing(): ReactElement {
  const title = 'Boota';

  const history = useHistory();

  const handleClick = (event: any) => {
    event.target.name === 'login'
      ? history.push({ pathname: '/login' })
      : history.push({ pathname: '/signup' });
  };

  return (
    <div className="landing-page">
      <div className="landing-container">
        <LandingHeader />
        <div className="landing-content">
          <div className="landing-text">
            <h2>
              With
              {' '}
              {title}
              , you can create quizzes for your students in an easy
              way!
            </h2>
            <p>
              {title}
              {' '}
              allows you to create your own personal multiple choice
              question bank.
              {title}
              {' '}
              also allows you to create quizzes with
              these questions and share with your students. Your students can
              log in, do the exam and you will receive a small report card with
              their total score!
            </p>
            <button
              className="login-btn"
              id="bottom-login"
              name="login"
              onClick={handleClick}
              type="button"
            >
              Log In
            </button>
            <button className="signup-btn" name="signup" onClick={handleClick} type="button">
              Sign Up
            </button>
          </div>
          <div className="landing-image">
            <img
              src={landingHero}
              height="500px"
              alt="landing hero"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
