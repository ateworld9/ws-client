import { useAppSelector } from 'hooks';
import { IUser } from 'types';

const HomePage = () => {
  const isAuthorized = useAppSelector<boolean>(
    (state) => state.user.authorized
  );
  const sessionUser = useAppSelector<IUser | undefined>(
    (state) => state.user.sessionUser
  );

  return (
    <main>
      {isAuthorized ? (
        <h1>Welcome back {sessionUser?.name}</h1>
      ) : (
        <h1>Welcome To ateworld9 Web Site </h1>
      )}
    </main>
  );
  //  <div>Welcome To ateworld9 Web Site </div>;
};

export { HomePage };
