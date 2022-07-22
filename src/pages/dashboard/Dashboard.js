import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import './Dashboard.css';

const Dashboard = ({ uname }) => {
  // eslint-disable-next-line
  console.log(null);
  return (
    <div className="Dashboard">
      <Navbar />
      {uname && <h2 id="usname">Welcome {uname}</h2>}
      {uname && <Link to="/logout">Logout</Link>}
    </div>
  );
};
export default Dashboard;
