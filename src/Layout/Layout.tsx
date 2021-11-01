import { FC, ReactNode } from 'react';
import { Layout as AntdLayout } from 'antd';
import { Header } from 'antd/lib/layout/layout';

import './Layout.scss';

const { Content } = AntdLayout;

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <AntdLayout className="main-layout">
      <AntdLayout className="content-layout-outer">
        <Header />
        <Content className="content-layout-inner">{children}</Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
