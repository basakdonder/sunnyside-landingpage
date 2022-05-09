import React from "react";
import "./ClientTestimonals.css";
import client1 from "../../images/image-emily.jpg";
import client2 from "../../images/image-jennie.jpg";
import client3 from "../../images/image-thomas.jpg";

const ClientTestimonals = () => {
  return (
    <div className="client-container">
      <h2>Client Testimonals</h2>
      <div className="client-wrapper">
        <div className="client-box">
          <img src={client1} alt="Client" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h4>Emily R.</h4>
          <p>Marketing Director</p>
        </div>
        <div className="client-box">
          <img src={client3} alt="Client" />
          <p>
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <h4>Thomas S.</h4>
          <p>Chief Operating Officer</p>
        </div>
        <div className="client-box">
          <img src={client2} alt="Client" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h4>Jennie F.</h4>
          <p>Business Owner</p>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonals;
