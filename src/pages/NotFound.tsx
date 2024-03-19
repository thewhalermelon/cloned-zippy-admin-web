import { FC } from 'react';

import { useNavigate } from 'react-router';
import { Button, Result } from 'antd';

interface IProps {}

const NotFound: FC<IProps> = () => {
  const navigate = useNavigate();

  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button type='primary' onClick={() => navigate('/membership')}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
