import React, { FC } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { ButtonType } from 'antd/lib/button';
import './LinkButton.scss';

interface IProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  to?: string;
  name: string;
  type?: ButtonType;
}

const LinkButton: FC<IProps> = ({ className, to, name, type, onClick }) => {
  return (
    <Button className={`${className || ''} btn link-button`} type={type} onClick={onClick}>
      <Link to={to}>{name}</Link>
    </Button>
  );
};

export default LinkButton;
