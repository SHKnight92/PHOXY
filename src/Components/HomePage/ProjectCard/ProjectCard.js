import React from 'react';
import './ProjectCard.css'

const ProjectCard = ({info}) => {
    return (
        <div className="photo-card">
          <img className="card-img-top img-thumbnail" src={info.image} alt="" />
          <div className="text-center">
            <h6>{info.title}</h6>
          </div>
      </div>
    );
};

export default ProjectCard;