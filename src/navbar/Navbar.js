import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { auth } from '../auth';

const Navbar = () => {
  const [path, setPath] = useState('');
  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);
  const [userName, setUserName] = useState('');
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // eslint-disable-next-line
      console.log(user);
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName('');
      }
    });
  }, []);
  const val = userName ? '/dashboard' : '/login';
  return (
    <div id="Navbar">
      <h2 id="logo">
        <span id="buddy">Spot</span>
        <span id="cart">Visit</span>
      </h2>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/home" className={path === '/home' ? 'active' : 'link'}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={val}
              className={path === '/dashboard' ? 'active' : 'link '}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/explore"
              className={
                path === '/explore'
                  ? 'active'
                  : 'link '
              }
            >
              Explore
            </Link>
          </li>
          <li>
            <Link to="/contactus" className={path === '/contactus' ? 'active' : 'link'}>
              ContactUs
            </Link>
          </li>
          <li>
            <Link to="/signup" className={path === '/signup' || path === '/login' ? 'active' : 'link'}>
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
