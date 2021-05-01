import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import s from './NavBar.module.css';

const NavBar = () => {
  const logoutHandler = () => {
    axios
      .get('http://localhost:3001/auth/logout', { withCredentials: true })
      .then((res) => {
        if (res.data) {
          window.location.href = '/';
        }
      });
  };

  return (
    <nav className={s.navBarWrapper}>
      <ul className={s.navBar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li onClick={logoutHandler}>Logout</li>
      </ul>
    </nav>
  );
};

export { NavBar };
