import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css"

const Services = () => {

  const [serviceInfo, setServiceInfo] = useState([]);
  useEffect(() => {
    fetch("https://phoxy.netlify.app/services")
      .then((res) => res.json())
      .then((data) => setServiceInfo(data));
  }, [])

  return (
    <section className="service-section">
      <h1>
        <span className="text-danger">Our Services</span> that always delivers
      </h1>
      <div className="row"> 
        {serviceInfo.map((info) => (
          <ServiceCard info={info}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
