import { FC } from 'react';
import { Flex, Image, Typography } from 'antd';

import MainLayout from '../layout';

import Zippi from '../assets/images/zippy.png';
import LoginForm from '../forms/LoginForm';
import { ADMIN_TEXT_WIDTH } from '../constant';

interface IProps {}

const Login: FC<IProps> = () => {
  return (
    <MainLayout>
      <Flex vertical align='center' justify='center' style={{ height: '100%' }}>
        <Image src={Zippi} alt='Zippi' preview={false} />
        <Flex justify='end' style={{ width: ADMIN_TEXT_WIDTH }}>
          <Typography.Title level={5}>Admin</Typography.Title>
        </Flex>
        <LoginForm />
      </Flex>
    </MainLayout>
  );
};

export default Login;
