import { useEffect, FC } from 'react';

import { useHistory } from 'react-router';
import { selectorAuth } from '../store/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { redirectAction, selectorPath } from '../store/redirect/redirectSlice';

const Redirect: FC = ({ children }) => {
  const dispatch = useAppDispatch();

  const authState = useAppSelector(selectorAuth);
  const { path } = useAppSelector(selectorPath);

  const history = useHistory();

  useEffect(() => {
    if (path) {
      history.push(path);
      dispatch(redirectAction(''));
    }
  }, [path]);

  useEffect(() => {
    if (authState.isLoggedIn) {
      history.push('/');
    }
  }, [authState.isLoggedIn]);

  return <>{children}</>;
};

export default Redirect;
