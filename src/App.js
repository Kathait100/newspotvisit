import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import Explore from './pages/Explore/Explore';
import Dashboard from './pages/dashboard/Dashboard';
import Contact from './pages/Contactus/Contact';
import Front from './Community/Front';
import Blogcontent from './Community/BlogCommunity';
// import Signup from './credential/Signup';
import Signin from './oAuth/signin';
import Signup from './oAuth/signup';
import { auth } from './auth';
import Logout from './oAuth/logout';

const App = () => {
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

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/home"
            caseSensitive={false}
            element={<Home />}
          />
          <Route
            exact
            path="/explore"
            caseSensitive={false}
            element={<Explore />}
          />
          <Route
            exact
            path="/dashboard"
            caseSensitive={false}
            element={<Dashboard uname={userName} />}
          />

          <Route
            exact
            path="/contactus"
            caseSensitive={false}
            element={<Contact />}
          />
          <Route
            exact
            path="/querywindow"
            caseSensitive={false}
            element={<Front />}
          />

          <Route
            exact
            path="/querywindow/:id"
            caseSensitive={false}
            element={<Blogcontent />}
          />
          <Route
            exact
            path="/signup"
            caseSensitive={false}
            element={<Signup />}
          />
          <Route
            exact
            path="/login"
            caseSensitive={false}
            element={<Signin />}
          />
          <Route
            exact
            path="/logout"
            caseSensitive={false}
            element={<Logout />}
          />
          <Route exact path="/*" element={<Navigate to="/home" />} />
          <Route exact path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
