import React, { ReactElement } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import landingHero from '../../Assets/landing-hero.svg';
import logo from '../../Assets/logo2.svg';

export default function Landing(): ReactElement {
  const history = useHistory();

  const handleClick = (event: any) => {
    event.target.name === 'login'
      ? history.push({ pathname: '/login' })
      : history.push({ pathname: '/signup' });
  };

  const title = 'Boota';

  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="landing-header">
          <div className="left-content">
            <span>About</span>
            <span>Contact</span>
          </div>
          <div className="middle-content">
            <img src={logo} height="70px" alt="logo" />
          </div>
          <div className="right-content">
            <button className="login-btn" name="login" onClick={handleClick} type="button">
              Log In
            </button>
            <button className="signup-btn" name="signup" onClick={handleClick} type="button">
              Sign Up
            </button>
          </div>
        </div>
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
        <footer className="footer-distributed">
          <div className="footer-left">
            {/* <img src="img/logo.png"></img> */}
            <h3>
              About
              <span> Me</span>
            </h3>

            <p className="footer-links">
              <p>Home</p>
              |
              <p>About</p>
              |
              <p>Contact</p>
            </p>

            <p className="footer-company-name">© 2020 FallenEFC</p>
          </div>
          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker" />
              <p>
                <span>SK, Canada</span>
              </p>
            </div>

            <div>
              <i className="fa fa-github" />
              <p>Fallenefc</p>
            </div>
            <div>
              <i className="fa fa-envelope" />
              <p>
                <a href="mailto:arylmoraesn@gmail.com">arylmoraesn@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-company-about">
              <span>About Me</span>
              I am a web developer based in Canada.
            </p>
            <div className="footer-icons">{/* No icons yet */}</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
