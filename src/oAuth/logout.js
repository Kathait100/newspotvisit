import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  signOut(auth).then(() => {
  // Sign-out successful.
    navigate('/');
  }).catch((error) => {
  // eslint-disable-next-line
      console.log(error);
  });
  return (<></>);
};

export default Logout;
