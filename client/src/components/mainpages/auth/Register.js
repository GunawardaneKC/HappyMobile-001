import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import video from '../../../images/polygon-145031.mp4';
import { MdMarkEmailRead } from 'react-icons/md';

function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState('');

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(user.email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const registerSubmit = async (e) => {
    e.preventDefault();

    // Validate email before submitting
    validateEmail();

    if (emailError === '') {
      try {
        await axios.post('/user/register', { ...user });

        localStorage.setItem('firstLogin', true);

        window.location.href = '/';
      } catch (err) {
        alert(err.response.data.msg);
      }
    }
  };

  return (
    <div className="registerPageLR flexLR">
      <div className="containerLR flexLR">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Buy And Rent Mobile Phones</h2>
            <p>Adopt best quality Brand new Mobiles and Used ones.</p>
          </div>

          <div className="footerDiv flexLR">
            <span className="text">Have an account?</span>
            <Link to={'/login'}>
              <button className="btn font-secondary">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flexLR">
          <div className="headerDiv">
            <h3>Let us Know You!</h3>
          </div>

          <form
            noValidate
            onSubmit={registerSubmit}
            className="form grid"
            autoComplete="off"
          >
            <div className="inputDiv">
              <label htmlFor="name">Username</label>
              <div className="input flexLR">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Username"
                  value={user.name}
                  onChange={onChangeInput}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flexLR">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  value={user.email}
                  onChange={onChangeInput}
                  onBlur={validateEmail}
                />
              </div>
              {emailError && <p className="error">{emailError}</p>}
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flexLR">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={user.password}
                  onChange={onChangeInput}
                />
              </div>
            </div>

            <button type="submit" className="btn flexLR">
              <span className="font-secondary">Register</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;