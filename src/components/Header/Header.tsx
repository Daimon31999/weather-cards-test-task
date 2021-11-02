import { FC } from 'react';
import { Button, Layout } from 'antd';
import { logOutAction, selectorAuth } from '../../store/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { messages } from '../../utils';
import LinkButton from '../LinkButton/LinkButton';
import './Header.scss';

const { login, logout, home } = messages.components.header;
const { homeRoute, loginRoute } = messages.routes;

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector(selectorAuth);

  const handleLogOut = () => {
    dispatch(logOutAction());
  };

  return (
    <Layout.Header>
      <LinkButton type="ghost" name={home} to={homeRoute} />
      <div className="end-container">
        {!isLoggedIn && <LinkButton type="ghost" name={login} to={loginRoute} />}
        <Button type="text" onClick={handleLogOut}>
          {logout}
        </Button>
      </div>
    </Layout.Header>
  );
};

export default Header;
