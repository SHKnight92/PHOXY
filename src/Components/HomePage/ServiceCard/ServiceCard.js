import React from 'react';
import "./ServiceCard.css"

const ServiceCard = ({ info }) => {
  console.log(info)
    return (
      <div className="service-card cal-sm-4 mt-4">
          <img className="image-fluid" src={info.image} alt="" />
          <h3>{info.title}</h3>
          <h6>${info.price}</h6>
          <p>{info.desc}</p>
      </div>
    );
};

export default ServiceCard;