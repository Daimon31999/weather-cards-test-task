import { Button, Layout } from 'antd';
import { FC } from 'react';
import { logOutAction, selectorAuth } from '../../store/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { messages } from '../../utils';
import LinkButton from '../LinkButton/LinkButton';
import './Header.scss';

const { login, logout, home } = messages.components.header;

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector(selectorAuth);

  const handleLogOut = () => {
    dispatch(logOutAction());
  };

  return (
    <Layout.Header>
      {/* TODO: move to messages.routes */}
      <LinkButton type="ghost" name={home} to="/" />
      <div className="end-container">
        {!isLoggedIn && <LinkButton type="ghost" name={login} to="/login" />}
        <Button type="text" onClick={handleLogOut}>
          {logout}
        </Button>
      </div>
    </Layout.Header>
  );
};

export default Header;
