// src/components/Header.js
import React from 'react';

import frontImg from '../../assets/frontend.png'

//React-icons
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Hi, I’m <span className="highlight">Timoty Soren</span></h1>
        <h2 className="role">Front End Developer</h2>
        <div className="social-media">
          <ul>
            <li><a href="https://github.com/timotysoren11"><FaGithub size={30}/></a></li>
            <li><a href="https://www.linkedin.com/in/timoty-soren-42b5b1236/"><CiLinkedin size={30}/></a></li>
            <li><a href=""><CiTwitter size={30}/></a></li>
          </ul>
        </div>
        <img src={frontImg} alt="frontImg" />
      </div>
    </header>
  );
};

export default Header;
