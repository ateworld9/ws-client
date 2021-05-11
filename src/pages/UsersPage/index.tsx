import { useAppDispatch, useAppSelector } from 'hooks';
import { IUser } from 'types';
import c from './UsersPage.module.css';

import noAvatar from 'assets/profile-no-avatar.png';
import { useEffect } from 'react';
import { fetchUsers } from 'store';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector<IUser[]>((state) => state.user.users);
  const isAuthorized = useAppSelector<boolean>(
    (state) => state.user.authorized
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main className={c.usersWrapper}>
      {users.length > 0 &&
        users.map((user) => (
          <article key={user._id} className={c.user}>
            <div className={c.userAva}>
              <img src={user.photo ?? noAvatar} alt="user_avatar" />
            </div>
            <div className={c.userInfo}>
              <h2>
                <Link to={`/user/${user._id}`}>
                  {user.name} {user?.surname}
                </Link>
              </h2>
              {isAuthorized && <Link to={`/dialog/${user._id}`}>Диалог</Link>}
            </div>
          </article>
        ))}
    </main>
  );
};

export { UsersPage };
