import { ComponentType, FC } from 'react';
import { Space, Typography } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { getFirstPathURL, handleNavigate } from '../../utils';

interface IconProps {
  className?: string;
}

interface IProps {
  Icon: ComponentType<IconProps>;
  title: string;
  path: string;
}

const MenuItem: FC<IProps> = ({ Icon, title, path }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Space
      className={`${styles.space} ${getFirstPathURL(location.pathname).includes(path) ? styles.selected : ''}`}
      onClick={() => {
        if (path === '/login') {
          localStorage.removeItem('is-auth');
        }

        handleNavigate(navigate, path);
      }}
    >
      <Icon className={styles.icon} />
      <Typography.Text className={styles.text}>{title}</Typography.Text>
    </Space>
  );
};

export default MenuItem;
