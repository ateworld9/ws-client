import { useAppSelector } from 'hooks';
import { IUser } from 'types';

import s from './UserProfilePage.module.css';

import noAvatar from 'assets/profile-no-avatar.png';

const UserProfilePage = () => {
  const user = useAppSelector<IUser | undefined>(
    (state) => state.user.sessionUser
  );
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
export { UserProfilePage };
