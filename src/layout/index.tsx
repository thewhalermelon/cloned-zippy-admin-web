import { FC, ReactNode } from 'react';
import { Layout } from 'antd';

import './styles.scss';

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => {
  return <Layout className='layout'>{children}</Layout>;
};

export default MainLayout;
