import React from 'react';
import './Lowersection.css';
import Travelimg1 from '../Asset/Travelimg1.jpg';
import sectionimg1 from '../Asset/travelimg2.jpg';
import sectionimg2 from '../Asset/travelimg3.jpg';
import sectionimg3 from '../Asset/travelimg4.jpg';
// import sectionimg4 from "../Assets/sectionimg4.png";
const Lowersection = () => {
// eslint-disable-next-line
   console.log(null);
  return (
    <div className="lower-section">
      <div className="lower-section-1">
        <div className="lower-section-1-1">
          <div className="lower-section-1-1-1">
            <h2>1. PLan Your Journey</h2>
            <span>Select Your Holiday Destination</span>
          </div>
          <img src={sectionimg1} width="120px" alt="Image1" />
        </div>
        <div className="lower-section-1-2">
          <img src={sectionimg2} width="120px" alt="Image2" />

          <div className="lower-section-1-2-1">
            <h2>2. Confirm Your Booking</h2>
            <span className="subtitle">Request Your Order</span>
          </div>
        </div>
      </div>
      <div className="lower-section-2">
        <div className="lower-section-2-1">
          <div className="lower-section-2-1-1">
            <h2>3. Get Qoutes</h2>
            <span>Save Your Time And Grab A Hot Deal</span>
          </div>
          <img src={sectionimg3} width="120px" alt="Image3" />
        </div>
        <div className="lower-section-2-2">
          <img src={Travelimg1} width="100px" height="100px" alt="Image4" />
          <div className="lower-section-2-2-1">
            <h2>4.Enjoy Your Holiday</h2>
            <span className="subtitle">Give FeedBack For The Journey</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lowersection;
