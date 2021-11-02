import { FC } from 'react';
import { Spin } from 'antd';
import './Loader.scss';

const Loader: FC = () => {
  return (
    <div className="loader">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
