import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchUserById } from 'store';

const DialogPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const isAuthorized = useAppSelector<boolean>(
    (state) => state.user.authorized
  );

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [id, dispatch]);
  return <main></main>;
};

export { DialogPage };
