import { FC } from 'react';
import useStore from '../../store/useStore';
import { Button, Flex } from 'antd';

interface IProps {}

const Counter: FC<IProps> = () => {
  const { count, increment, decrement } = useStore();

  return (
    <Flex gap='small' wrap='wrap' align='center'>
      <h2>Counter: {count}</h2>
      <Button type='primary' onClick={increment}>
        Increase
      </Button>
      <Button type='dashed' onClick={decrement}>
        Decrease
      </Button>
    </Flex>
  );
};

export default Counter;
