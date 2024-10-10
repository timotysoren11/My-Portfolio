// src/components/About.js
import React from 'react';

//image
import aboutImg from '../../assets/about.jpg'


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="img-container">
        <img src={aboutImg} alt="Profile-img" />
      </div>
      <div className="content">
        <h1>MCA Graduate</h1>
        <p>
        Hi, I'm a passionate and highly motivated frontend developer, eager to start my journey in the world of web development. With a strong foundation in HTML, CSS, and JavaScript, I am focused on creating responsive and user-friendly web applications. Although I am a fresher, I have developed several projects during my academic career, including interactive websites and web applications using modern frameworks like ReactJS.

I am always enthusiastic about learning new technologies, improving my skills, and solving real-world challenges through innovative solutions. My goal is to contribute to dynamic teams, grow as a developer, and help deliver beautiful, functional, and efficient user experiences across all platforms.
      </p>
      </div>
    </section>
  );
};

export default About;
