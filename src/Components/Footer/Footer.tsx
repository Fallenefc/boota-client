import React from 'react'
import './styles.css';

export const Footer = () => {
    return (
    <footer>
        <div className="footer">
          <div className="footer-left">
              <a href='/'>Home</a>
              <a href='/about'>About</a>
              <a href='/contact'>Contact</a>
          </div>
          <div className="footer-right">
            <div>
                <i className="fa fa-map-marker" />
                <p>
                    <span>SK, Canada</span>
                </p>
                </div>

                <a href='https://github.com/Fallenefc'>
                <i className="fa fa-github" />
                <p>Fallenefc</p>
                </a>
                <div>
                <i className="fa fa-envelope" />
                <p>
                    <a href="mailto:arylmoraesn@gmail.com">arylmoraesn@gmail.com</a>
                </p>
                </div>
          </div>
        </div>
        <div className='copyright'>
            Copyright Fallenefc, 2020
        </div>
        </footer>
    )
}
