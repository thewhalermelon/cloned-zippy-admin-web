import { FC, useEffect, useState } from 'react';
import { Button, DatePicker, Flex, Form, Input, Radio } from 'antd';
import TextArea from 'antd/es/input/TextArea';

import { PushMessageFieldType } from '../../types';

interface IProps {}

const PushMessageForm: FC<IProps> = () => {
  const [submitBtn, setSubmittable] = useState<boolean>(false);

  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  const validateMessages = {
    required: '${label} is required!',
  };

  const config = {
    rules: [
      {
        type: 'object' as const,
        required: values?.timeToShip === 'reserved' ? true : false,
        message: '',
      },
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      form
        .validateFields({ validateOnly: true })
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false));
    });
  }, [form, values]);

  return (
    <Form
      form={form}
      name='pushMessageValidateOnly'
      autoComplete='off'
      validateMessages={validateMessages}
      onSubmitCapture={() => {
        console.log('values: ', values?.datePicker?.format('YYYY-MM-DD HH:mm:ss'));
      }}
    >
      <Form.Item<PushMessageFieldType> name='title' label='Push Title' rules={[{ required: true }]}>
        <Input size='large' />
      </Form.Item>
      <Form.Item<PushMessageFieldType> name='detail' label='Push Detail' rules={[{ required: true }]}>
        <TextArea rows={8} />
      </Form.Item>
      <Flex align='center' gap={20}>
        <Form.Item<PushMessageFieldType> label='When to ship' name='timeToShip' rules={[{ required: true }]}>
          <Radio.Group size='large'>
            <Radio.Button value='immediate'>Immediate delivery</Radio.Button>
            <Radio.Button value='reserved'>Reserved delivery</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item<PushMessageFieldType> name='datePicker' {...config}>
          <DatePicker
            showTime
            format='YYYY-MM-DD HH:mm:ss'
            className={`${values?.timeToShip === 'reserved' ? 'show' : ''}`}
            size='large'
          />
        </Form.Item>
      </Flex>
      <Form.Item<PushMessageFieldType> label='Shipping destination' name='placeToShip' rules={[{ required: true }]}>
        <Radio.Group size='large'>
          <Radio.Button value='all'>All members</Radio.Button>
          <Radio.Button value='premium'>Premium</Radio.Button>
          <Radio.Button value='light'>Light</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Flex justify='end'>
          <Button type='primary' htmlType='submit' disabled={!submitBtn} size='large'>
            Send
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
};

export default PushMessageForm;
