// src/components/Header.js
import React from 'react';

import frontImg from '../../assets/frontend.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Hi, I’m <span className="highlight">Timoty</span>, web developer</h1>
        <h2 className="role">Front End Developer</h2>
        <img src={frontImg} alt="frontImg" />
      </div>
    </header>
  );
};

export default Header;
