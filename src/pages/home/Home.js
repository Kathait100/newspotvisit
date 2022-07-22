import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import Lowersection from '../../Body/Lowersecition';
import Section from '../../Body/section';
import Navbar from '../../navbar/Navbar';
// import Search from '../Search';

const Home = () => {
  // const handelChange = (data) => {
  // eslint-disable-next-line
   console.log(null);
  // };
  return (
    <div className="Onboarding">
      <Navbar />
      <Section />
      {/* <Autocomplete>
        <div className="input-box">
          <input
            type="text"
            name="name"
            className="input label"
            placeholder="vikash"
            onChange={handelChange}
          />
        </div>
      </Autocomplete> */}
      <Lowersection />
    </div>
  );
};
export default Home;
