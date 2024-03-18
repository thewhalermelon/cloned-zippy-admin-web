import { FC, useEffect, useState } from 'react';
import { Button, Flex, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate, useLocation } from 'react-router-dom';

import { EventNoticeFieldType } from '../../types';
import { handleNavigate } from '../../utils';
import ModalComponent from '../../components/ModalComponent';

interface IProps {}

const EventNoticeForm: FC<IProps> = () => {
  const [submittable, setSubmittable] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  const initialValues = {
    title: 'System update schedule information',
    detail:
      "The customer is very important, the customer will be followed by the customer. Aenean euismod bibendum laoreet For pregnant women, it's a lot of fun, and it's just a good cartoon. The members of the pulvinar are thus timed. Together, the mountains will give birth to feathers and a great push, and a ridiculous mouse will be born. For the leaven, there is no sorrow for the pharetra vulputate, felis tellus mollis orci, but the rhoncus pronin sapien now needs accuan.",
  };

  const validateMessages = {
    required: '${label} is required!',
  };

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <>
      <Form
        form={form}
        name='validateOnly'
        layout='vertical'
        autoComplete='off'
        validateMessages={validateMessages}
        initialValues={location.search ? initialValues : {}}
      >
        <Form.Item<EventNoticeFieldType> name='title' label='Title' rules={[{ required: true }]}>
          <Input size='large' />
        </Form.Item>
        <Form.Item<EventNoticeFieldType> name='detail' label='Detail' rules={[{ required: true }]}>
          <TextArea rows={8} />
        </Form.Item>
        <Form.Item>
          {location.search ? (
            <Flex justify='end' gap={20}>
              <Button
                ghost
                type='primary'
                htmlType='submit'
                disabled={!submittable}
                size='large'
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                Delete
              </Button>
              <Button
                type='primary'
                htmlType='submit'
                disabled={!submittable}
                size='large'
                onClick={() => handleNavigate(navigate, '/notice-event')}
              >
                Edit
              </Button>
            </Flex>
          ) : (
            <Flex justify='end'>
              <Button
                type='primary'
                htmlType='submit'
                disabled={!submittable}
                size='large'
                onClick={() => handleNavigate(navigate, '/notice-event')}
              >
                Registration
              </Button>
            </Flex>
          )}
        </Form.Item>
      </Form>
      <ModalComponent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default EventNoticeForm;
