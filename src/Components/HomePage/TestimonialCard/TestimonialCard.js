import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({info}) => {
    return (
      <div className="testimonial-card mt-4">
        <img className="image-fluid my-3" src={info.image} alt="" />
        <h5>{info.name}</h5>
        <p>{info.designation}</p>
        <small>{info.desc}</small>
      </div>
    );
};

export default TestimonialCard;