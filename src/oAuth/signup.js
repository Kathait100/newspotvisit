import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../auth';
import Navbar from '../navbar/Navbar';
import './signup.css';
import signup from '../Asset/signup.jpg';

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [err, setErr] = useState('');
  const [check, setCheck] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.name || !values.password) {
      setErr('Fill All Fields');
      return;
    }
    // eslint-disable-next-line
    console.log(values);
    setCheck(true);
    createUserWithEmailAndPassword(auth, values.email, values.password).then(async (res) => {
      // eslint-disable-next-line
        console.log(res);
      const userdata = res.user;
      await updateProfile(userdata, { displayName: values.name });
      setCheck(false);
      navigate('/');
    }).catch((error) => {
      setErr(error.message);
      // eslint-disable-next-line
     console.log(error);
      setCheck(false);
    });
  };
  return (
    <>
      <Navbar />
      <div className="SignupModal">
        <div className="signup">
          <h2 className="header">Sign Up</h2>
          <form>
            <div className="name">
              <h3 className="link label">Username</h3>
              <input
                type="text"
                name="name"
                className="input label"
                placeholder="vikash"
                onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="email">
              <h3 className="link label">Your Email</h3>
              <input
                type="email"
                name="email"
                className="input label"
                placeholder="youremail@gmail.com"
                onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
              />
              <div className="email error">
                {null}
              </div>
            </div>
            <div className="password">
              <h3 className="link label">Password</h3>
              <input
                type="password"
                className="input label"
                name="password"
                placeholder="123456"
                onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))}
              />
              <div className="password error">
                {null}
              </div>
              <div className="error">
                {err}
              </div>
            </div>
            <button type="submit" className="search btn" onClick={handelSubmit} disabled={check}>
              Create Account
            </button>
            <br />
            <input type="checkbox" id="id" name="id" value="check" checked />
            <span>I Agree To The <span className="active">Terms And Condition</span><br /> And <span className="active">Privacy Policy</span></span>
            <br />
            <button className="btn1" type="button">
              <Link to="/login">Login</Link>
            </button>
          </form>
          {/* <div className="signup1">

          </div> */}
        </div>
        <div className="img">
          <img src={signup} style={{ height: '400px' }} alt="" />
        </div>
      </div>
    </>
  );
};
export default Signup;
