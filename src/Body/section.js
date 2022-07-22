import React from 'react';
import './section.css';
import Travelimg1 from '../Asset/Travelimg1.jpg';

const Section = () => {
// eslint-disable-next-line
   console.log(null);
  return (
    <div id="section">
      <div id="section-1">
        <div id="inner-section-1">
          <span className="inner-content">Want To Explore</span><br />
          <span className="inner-content"> Nearby Most Visited Place?</span>
        </div>

        <div id="inner-section-2">
          <h3>Book Your Ride Now.</h3>
          {/* <span>Order Now</span> */}
        </div>
      </div>
      <div className="section-2">
        <img src={Travelimg1} alt="" />
      </div>
    </div>
  );
};
export default Section;
