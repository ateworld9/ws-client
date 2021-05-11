import { Redirect, Route, RouteProps } from 'react-router';
import { useAppSelector } from 'hooks';

const AuthorizedRoute = ({ children, ...rest }: RouteProps) => {
  const isAuth = useAppSelector<boolean>((state) => state.user.authorized);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export { AuthorizedRoute };
