import axios from 'axios';
import { clearUser } from 'store';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Link } from 'react-router-dom';
import s from './NavBar.module.css';

import { IUser } from 'types';

import noPhoto from 'assets/header-no-photo.png';

const NavBar = () => {
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    axios
      .get('http://localhost:3001/auth/logout', { withCredentials: true })
      .then((res) => {
        if (res.data) {
          dispatch(clearUser());
          window.location.href = '/';
        }
      });
  };

  const isAuthorized = useAppSelector<boolean>(
    (state) => state.user.authorized
  );
  const user = useAppSelector<IUser | undefined>(
    (state) => state.user.sessionUser
  );

  return (
    <nav className={s.navBarWrapper}>
      <ul className={s.navBar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isAuthorized && (
          <>
            <li onClick={logoutHandler}>Logout</li>
            <li className={s.user}>
              <Link to="/profile" className={s.userLink}>
                {user?.name}
                <img
                  className={s.userAvatar}
                  src={user?.photo ? user.photo : noPhoto}
                  alt="avatar"
                />
              </Link>
            </li>
          </>
        )}
        {!isAuthorized && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export { NavBar };
