// src/components/Work.js
import React from 'react';

const Work = () => {

  //creating objects for the project
  const projects = [
    {
      title: "Note App",
      imgSrc: " ",
      link: "#",
      imgAlt: "project-img-1"
    },
    {
      title: "News Portal",
      imgSrc: "",
      link: "#",
      imgAlt: "project-img-2"
    },
    {
      title: "Project 3 Title",
      imgSrc: "",
      link: "#",
      imgAlt: "project-img-3"
    },
    {
      title: "Project 4 Title",
      imgSrc: "",
      link: "#",
      imgAlt: "project-img-4"
    },
    {
      title: "Project 5 Title",
      imgSrc: "",
      link: "#",
      imgAlt: "project-img-5"
    },
    {
      title: "Project 6 Title",
      imgSrc: "",
      link: "#",
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
