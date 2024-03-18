import { FC } from 'react';
import { Col, Divider, Flex, Image, Space } from 'antd';

import Zippi from '../../assets/images/zippy.png';
import { PADDING_SIZES } from '../../constant';
import { LogoutOutlined, MailOutlined, UserOutlined, UnorderedListOutlined } from '@ant-design/icons';
import MenuItem from '../MenuItem';

interface IProps {}

const SideBar: FC<IProps> = () => {
  return (
    <Col span={4} style={{ padding: PADDING_SIZES.lg }}>
      <Flex vertical justify='space-between' style={{ height: '100%' }}>
        <Flex vertical align='center'>
          <Image src={Zippi} alt='Zippi' preview={false} />
          <Divider />
          <Space direction='vertical' align='start' size={30}>
            <MenuItem Icon={UserOutlined} title='Member' path='/membership' />
            <MenuItem Icon={UnorderedListOutlined} title='Notice/Event' path='/notice-event' />
            <MenuItem Icon={MailOutlined} title='Push Message' path='/push-message' />
          </Space>
        </Flex>
        <Flex vertical align='center'>
          <Divider />
          <Space direction='vertical' align='start' size={30}>
            <MenuItem Icon={LogoutOutlined} title='Log out' path='*' />
          </Space>
        </Flex>
      </Flex>
    </Col>
  );
};

export default SideBar;
