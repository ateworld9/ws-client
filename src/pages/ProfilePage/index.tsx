import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from 'hooks';
import { IUser } from 'types';

import s from './ProfilePage.module.css';

import noAvatar from 'assets/profile-no-avatar.png';
import { useEffect } from 'react';
import { fetchUserById } from 'store';

const ProfilePage = () => {
  const user = useAppSelector<IUser>((state) => state.user.user);
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  return (
    <main className={s.container}>
      <div className={s.avatarContainer}>
        <img src={user?.photo ?? noAvatar} alt="avatar" />
      </div>
      <div className={s.profileInfoContainer}>
        <h1>
          {user?.name} {user?.surname}
        </h1>
      </div>
    </main>
  );
};
export { ProfilePage };
