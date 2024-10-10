// src/components/Skills.js
import React from 'react';

import  skillImg from '../../assets/skill.jpeg'

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Node'];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skill-container">
        <div className="skill">
          <h2>My Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-img">
          <img src={skillImg} alt="skill-img" />
      </div>
      
      </div>
    </section>
  );
};

export default Skills;
