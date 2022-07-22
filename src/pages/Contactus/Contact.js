import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
import Navbar from '../../navbar/Navbar';
import Create from './create';
import './Contact.css';

const Contact = () => {
  const [val, setIsVal] = useState(null);
  const name = 'hello';
  useEffect(() => {
    setIsVal(null);
  }, [name]);

  return (
    <div className="Contact">
      {val}
      <Navbar />
      <Create />
    </div>
  );
};
export default Contact;
