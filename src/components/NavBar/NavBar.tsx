import React from 'react';
import { Link } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={s.navBarWrapper}>
      <ul className={s.navBar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </div>
  );
};

export { NavBar };
