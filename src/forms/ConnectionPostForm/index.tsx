import { FC, useEffect, useState } from 'react';
import { Button, Flex, Form, Input, Typography } from 'antd';

import { PADDING_SIZES } from '../../constant';
import { ConnectionPostFieldType } from '../../types';

interface IProps {}

const ConnectionPostForm: FC<IProps> = () => {
  const [submitBtn, setSubmittable] = useState<boolean>(false);

  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  const validateMessages = {
    required: '',
  };

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Form form={form} name='connectionPostValidateOnly' autoComplete='off' validateMessages={validateMessages}>
      <Flex align='center' gap={20}>
        <Typography.Text style={{ paddingBottom: PADDING_SIZES.lg }}>Connection Post:</Typography.Text>
        <Form.Item<ConnectionPostFieldType> name='connectionPost' rules={[{ required: true }]} style={{ flexGrow: 1 }}>
          <Input size='large' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' disabled={!submitBtn} size='large'>
            Post List
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default ConnectionPostForm;
