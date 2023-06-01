import React, { useState } from 'react';
import '../App.css';
import LSV from '../assets/LSV.png';
import { Link } from 'react-router-dom';

const pages = [
  {
    name: 'Resources',
    link: '/resources',
  },
  {
    name: 'Profile',
    link: '/profile',
  },
  {
    name: 'Help',
    link: '/help',
  },
  {
    name: 'Quiz',
    link: '/quiz',
  },
];

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const handleNavToggle = () => {
      setIsNavOpen(!isNavOpen);
    };
  
    const handleExitButton = () => {
      setIsNavOpen(!isNavOpen);
    };
  
    return (
      <div className="navbar-content-area">
        <div className="navbar-containers">
          <div className="navbar-page-titles-container">
            <Link to="/">
              <img src={LSV} className="company-logo" alt="logo" />
            </Link>
          </div>
          <div className="navbar-page-titles-container">
            <div
              className={`navbar-toggle ${isNavOpen ? 'open' : ''}`}
              onClick={handleNavToggle}
            >
              <div className={`toggle-line ${isNavOpen ? 'open' : ''}`}></div>
              <div className={`toggle-line ${isNavOpen ? 'open' : ''}`}></div>
              <div className={`toggle-line ${isNavOpen ? 'open' : ''}`}></div>
            </div>
            <div className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
            <div className={`exit-button ${isNavOpen ? 'active' : ''}`} onClick={handleExitButton}>
                X
            </div>
              {pages.map((item, index) => {
                return (
                  <Link
                    to={item.link}
                    key={index}
                    className="navbar-page-titles"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Navbar;