import { FC } from 'react';
import { Col, Flex, Row, Tabs, TabsProps, Typography } from 'antd';

import MainLayout from '../layout';
import SideBar from '../components/SideBar';
import { COLOR_333, COLOR_WHITE, FONT_SIZES, FONT_WEIGHTS, PADDING_SIZES } from '../constant';
import PushMessageForm from '../forms/PushMessageForm';
import ConnectionPostForm from '../forms/ConnectionPostForm';
import TableComponent from '../components/TableComponent';
import { shippingDetailTableColumns } from '../components/TableComponent/tableColumns';
import { shippingDetailTableData } from '../components/TableComponent/tableData';

interface IProps {}

const PushMessage: FC<IProps> = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Send',
      children: (
        <>
          <ConnectionPostForm />
          <PushMessageForm />
        </>
      ),
    },
    {
      key: '2',
      label: 'Shipping Details',
      children: <TableComponent tableColumns={shippingDetailTableColumns} tableData={shippingDetailTableData} />,
    },
  ];

  return (
    <MainLayout>
      <Row style={{ height: '100vh' }}>
        <SideBar />
        <Col span={20} style={{ backgroundColor: COLOR_WHITE, padding: PADDING_SIZES.lg }}>
          <Flex vertical gap={20}>
            <Typography.Text style={{ color: COLOR_333, fontSize: FONT_SIZES.huge, fontWeight: FONT_WEIGHTS.semibold }}>
              Push Message
            </Typography.Text>
            <Tabs type='card' items={items} size='large' />
          </Flex>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default PushMessage;
