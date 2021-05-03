import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <h1>
        <span className="text-danger">About Us</span> For More Details
      </h1>
      <div className="row gx-1">
        <div className="map-container col-sm-6">
          <div>
            <div className="mx-5">
              <iframe
                width="100%"
                height="400"
                id="gmap_canvas"
                src={`https://maps.google.com/maps?q=dhaka&t=&z=11&ie=UTF8&iwloc=&output=embed`}
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-sm-5 mx-4">
          <h3 className="text-center">Subscribe Us</h3>
          <div class="input-group py-4 email">
            <input type="email" class="form-control" />
            <button class="btn btn-danger">Email</button>
          </div>
          <p className="text-center py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
