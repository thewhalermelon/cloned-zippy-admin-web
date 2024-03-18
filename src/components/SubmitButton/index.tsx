import { FC, useState, useEffect } from 'react';
import { Button, Form, type FormInstance } from 'antd';

interface IProps {
  form: FormInstance;
  isBlock: boolean;
}

const SubmitButton: FC<React.PropsWithChildren<IProps>> = ({ form, children, isBlock }) => {
  const [submittable, setSubmittable] = useState<boolean>(false);

  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type='primary' htmlType='submit' disabled={!submittable} size='large' block={isBlock}>
      {children}
    </Button>
  );
};

export default SubmitButton;
