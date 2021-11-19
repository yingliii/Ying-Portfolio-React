import React, { useState, useEffect } from 'react';
import PortfolioCard from './PortfolioCard';
import './PortfolioCard.css';
import API from '../utils/API'

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // get projects
  useEffect(() => {
    API.getProjects()
      .then(res => setProjects(res))
      .catch(err => console.log(err));
  }, []); // [] means runs once

  return (
    <div>
    <h2>Portfolios</h2>
      <div className="card-list">
        {projects.map(project => (
            <PortfolioCard
              key={project.title}
              name={project.title} 
              description={project.description}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              deployedUrl={project.deployedUrl}
            />
        ))
        }
      </div>
    </div>
  )
};

export default Projects;
