import { FC } from 'react';
import { Flex, Form, Input, message } from 'antd';

import { LoginFieldType } from '../../types';
import SubmitButton from '../../components/SubmitButton';
import { FORM_WIDTH } from '../../constant';
import { useNavigate } from 'react-router';

interface IProps {}

const LoginForm: FC<IProps> = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const error = () => {
    messageApi.error('The email or password you entered is incorrect.');
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };

  const handleSubmit = (values: any) => {
    const { email, password } = values;
    const correctEmail = 'admin@nibens.co.kr';
    const correctPassword = 'dihisoft1234';

    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem('is-auth', JSON.stringify(true));
      navigate('/membership');
    } else {
      error();
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        name='validateOnly'
        layout='vertical'
        autoComplete='off'
        style={{ width: FORM_WIDTH }}
        validateMessages={validateMessages}
        onFinish={handleSubmit}
      >
        <Form.Item<LoginFieldType> name='email' rules={[{ required: true, type: 'email' }]}>
          <Input size='large' placeholder='ID' />
        </Form.Item>
        <Form.Item<LoginFieldType> name='password' rules={[{ required: true }]}>
          <Input.Password size='large' placeholder='Password' />
        </Form.Item>
        <Form.Item>
          <Flex justify='end'>
            <SubmitButton form={form} isBlock={true}>
              Login
            </SubmitButton>
          </Flex>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
