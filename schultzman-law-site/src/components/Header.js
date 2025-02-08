import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="container">
        <h1>Kaplan & Kaplan P.C.</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#practice-areas">Practice Areas</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
