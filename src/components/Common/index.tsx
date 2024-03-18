import { FC, useEffect } from 'react';
import { Anchor, Breadcrumb, Button, Col, Divider, Flex, Layout, Popconfirm, Row, Tooltip, Typography } from 'antd';
import { CheckOutlined, CopyOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';

interface IProps {}

const MENU_ITEMS = [
  {
    key: '1',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='http://www.alipay.com/'>
        General
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='http://www.taobao.com/'>
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='http://www.tmall.com/'>
        Navigation
      </a>
    ),
  },
];

const Common: FC<IProps> = () => {
  useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);

  return (
    <Layout
      style={{
        padding: '2rem',
      }}
    >
      <Row>
        <Col span={20}>
          {/* // ANCHOR - Buttons*/}
          <Typography.Title level={2} id='buttons'>
            1. Buttons
          </Typography.Title>
          <Flex justify='center' gap='middle'>
            <Button type='primary'>Primary Button</Button>
            <Button>Default Button</Button>
            <Button type='dashed'>Dashed Button</Button>
            <Popconfirm title='Are you sure delete this task?' okText='Yes' cancelText='No'>
              <Button>Confirm</Button>
            </Popconfirm>
            <Button type='text'>Text Button</Button>
            <Button type='link'>Link Button</Button>
            <Tooltip title='search'>
              <Button type='primary' shape='circle' icon={<SearchOutlined />} />
            </Tooltip>
            <Tooltip title='search'>
              <Button type='primary' shape='round' icon={<SearchOutlined />}>
                Search
              </Button>
            </Tooltip>
          </Flex>
          {/* // ANCHOR - Typography*/}
          <Typography.Title level={2} id='typography'>
            2. Typography
          </Typography.Title>
          <Flex justify='center' gap='middle' vertical align='center'>
            <Typography.Text code>Code</Typography.Text>
            <Typography.Text
              copyable={{
                icon: [<CopyOutlined key='copy-icon' />, <CheckOutlined key='copied-icon' />],
              }}
            >
              Copyable
            </Typography.Text>
            <Typography.Text delete>Delete</Typography.Text>
            <Typography.Text disabled>Disabled</Typography.Text>
            <Typography.Text editable>Editable</Typography.Text>
            <Typography.Text keyboard>Keyboard</Typography.Text>
            <Typography.Text mark>Mark</Typography.Text>
            <Typography.Text strong>Strong</Typography.Text>
            <Typography.Text italic>Italic</Typography.Text>
            <Typography.Text type='danger'>Danger</Typography.Text>
            <Typography.Text type='secondary'>Secondary</Typography.Text>
            <Typography.Text type='success'>Success</Typography.Text>
            <Typography.Text type='warning'>Warning</Typography.Text>
            <Typography.Text underline>Underline</Typography.Text>
            <Typography.Text ellipsis>
              <Typography.Text strong>Ellipsis Text:</Typography.Text> Ant Design, a design language for background
              applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is
              refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED
              Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team.
            </Typography.Text>
          </Flex>
          {/* // ANCHOR - Divider*/}
          <Typography.Title level={2} id='divider'>
            3. Divider
          </Typography.Title>
          <Flex justify='center' gap='middle' vertical align='center'>
            <Divider />
            <Divider dashed />
            <Divider orientation='left'>Left Text</Divider>
            <Divider orientation='left' plain>
              Plain Left Text
            </Divider>
          </Flex>
          {/* // ANCHOR - Breadcrumb*/}
          <Typography.Title level={2} id='breadcrumb'>
            4. Breadcrumb
          </Typography.Title>
          <Flex justify='center' gap='middle' vertical align='center'>
            <Breadcrumb
              separator='>'
              items={[
                {
                  path: '/home',
                  title: 'Home',
                },
                {
                  path: '/list',
                  title: (
                    <>
                      <UserOutlined />
                      <span>List</span>
                    </>
                  ),
                  menu: { items: MENU_ITEMS },
                },
                {
                  path: '/detail',
                  title: <a href=''>Detail</a>,
                },
                {
                  title: 'An Application',
                },
              ]}
            />
          </Flex>
        </Col>
        <Col span={4}>
          {/* // ANCHOR - Anchor*/}
          <Anchor
            items={[
              {
                key: 'buttons',
                href: '#buttons',
                title: 'Buttons',
              },
              {
                key: 'typography',
                href: '#typography',
                title: 'Typography',
              },
              {
                key: 'divider',
                href: '#divider',
                title: 'Divider',
              },
              {
                key: 'breadcrumb',
                href: '#breadcrumb',
                title: 'Breadcrumb',
              },
            ]}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default Common;
