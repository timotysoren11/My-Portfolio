// src/components/Work.js
import React from 'react';

import projectImg from '../../assets/project.jpg'

const Work = () => {

  //creating objects for the project
  const projects = [
    {
      title: "Note App",
      imgSrc: projectImg,
      link: "https://github.com/timotysoren11/ReactJs-Note-App",
      imgAlt: "project-img-1"
    },
    {
      title: "News Portal",
      imgSrc: projectImg,
      link: "https://github.com/timotysoren11/ReactJs-NewsPortal",
      imgAlt: "project-img-2"
    },
    {
      title: "Data Fetching",
      imgSrc: projectImg,
      link: "https://github.com/timotysoren11/Binance-Market-data-fetching",
      imgAlt: "project-img-3"
    },
    {
      title: "Calculator",
      imgSrc: projectImg,
      link: "https://github.com/timotysoren11/React-Calculator",
      imgAlt: "project-img-4"
    },
    {
      title: "Weather App",
      imgSrc: projectImg,
      link: "https://github.com/timotysoren11/Weather-App-Reactjs",
      imgAlt: "project-img-5"
    },
    {
      title: "Landing Page",
      imgSrc: projectImg,
      link: "https://github.com/timotysoren11/Landing-Portfolio",
      imgAlt: "project-img-6"
    }
  ];


  return (
    <section id="work" className="work-section">
      <div className="project-container">
        {projects.map((project, index) => (
           <div className="project-1" key={index}>
           <h2>{project.title}</h2>
           <img src={project.imgSrc} alt={project.imgAlt} />
           <a href={project.link}>Project Link</a>
         </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
