import { FC } from 'react';
import { messages } from '../../utils';
import './Header.scss';

const { login } = messages.components.header;

const Header: FC = () => {
  return (
    <div className="">
      <h1>{login}</h1>
    </div>
  );
};

export default Header;
