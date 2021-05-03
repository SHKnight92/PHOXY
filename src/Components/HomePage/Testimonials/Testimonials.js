import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.css'
import img01 from '../../../Images/Image/Ellipse 91.png'
import img02 from '../../../Images/Image/Ellipse 90.png'
import img03 from '../../../Images/Image/Ellipse 92.png'

const testimonialInfo = [
  {
    image: img01,
    name: "Nash Khan",
    designation: "CEO, Manpol",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: img02,
    name:  "Patrik Joi",
    designation: "CEO, SPDF",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: img03,
    name: "SH Knight",
    designation: "CEO, Alit",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: img01,
    name: "Nash Patrik",
    designation: "CEO, Manpol",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Testimonials = () => {
    return (
      <section className="container testimonial-section mb-5">
        <h1>
         Our Client <span className="text-danger">Testimonials</span>
        </h1>
        <div className="row">
          {testimonialInfo.map((info) => (
            <TestimonialCard info={info}></TestimonialCard>
          ))}
        </div>
      </section>
    );
};

export default Testimonials;