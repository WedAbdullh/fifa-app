// src/NavbarFooter.js
import React from 'react';
import './PlayZone.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); // لمعرفة الصفحة الحالية <Link to="/host-cities" className={`nav-link ${isActive('/host-cities') ? 'active' : ''}`}>Host Cities & Stadiums</Link>

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <img src={process.env.PUBLIC_URL + "/logo.png"} alt="FIFA Logo" className="logo" />
      <ul>
        <li>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
        </li>
        <li>
          <Link to="/overview" className={`nav-link ${isActive('/overview') ? 'active' : ''}`}>Overview</Link>
        </li>
        <li>
          
          <Link to="/cities" className={`nav-link ${isActive('/cities') ? 'active' : ''}`}>Host Cities & Stadiums</Link>
         
        </li>
        <li>
          <Link to="/teams-and-matches" className={`nav-link ${isActive('/teams-and-matches') ? 'active' : ''}`}>Teams & Matches</Link>
        </li>
        <li>
          <Link to="/play-zone" className={`nav-link ${isActive('/play-zone') ? 'active' : ''}`}>Play Zone</Link>
        </li>
      </ul>
      <div className="auth-buttons">
      <Link to="/login">
          <button className="login">Log in</button>
        </Link>
        <Link to="/signup">
          <button className="signup">Sign up</button>
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-columns">
        {['FAQ', 'Partnership', 'Contact Us'].map((item, idx) => (
          <div key={idx} className="column">
            <p>{item}</p>
          </div>
        ))}
      </div>
      <img src={process.env.PUBLIC_URL + "/logo.png"} alt="FIFA 2034 Logo" className="footer-logo" />
      <div className="social-icons">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-twitter"></i>
      </div>
    </footer>
  );
}

export { Navbar, Footer };