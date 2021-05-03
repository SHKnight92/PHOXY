import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import bird from '../../../Images/Image/bird.jpg'
import flower from '../../../Images/Image/flower.jpg'
import forest from '../../../Images/Image/forest.jpg'
import './PhotoProject.css'

const photoInfo = [
  {
    title: "Nature of Forest",
    location: "Bangladesh",
    image: forest,
  },
  {
    title: "Blooming Flower",
    location: "Bangladesh",
    image: flower,
  },
  {
    title: "Flying Bird",
    location: "Bangladesh",
    image: bird,
  },
  {
    title: "Flying Bird",
    location: "Bangladesh",
    image: bird,
  }
];

const PhotoProject = () => {
    return (
      <section className="project-section">
        <h1>
          Discover the latest <span className="text-danger">Interior Photo</span>
        </h1>
        <div className="row">
          {photoInfo.map((info) => (
            <ProjectCard info={info}></ProjectCard>
          ))}
        </div>
      </section>
    );
};

export default PhotoProject;