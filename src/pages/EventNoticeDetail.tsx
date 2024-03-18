import { FC } from 'react';
import { Col, Flex, Row, Typography } from 'antd';

import MainLayout from '../layout';
import SideBar from '../components/SideBar';
import { COLOR_333, COLOR_WHITE, FONT_SIZES, FONT_WEIGHTS, PADDING_SIZES } from '../constant';
import EventNoticeForm from '../forms/EventNoticeForm';

interface IProps {}

const EventNoticeDetail: FC<IProps> = () => {
  return (
    <MainLayout>
      <Row style={{ height: '100vh' }}>
        <SideBar />
        <Col span={20} style={{ backgroundColor: COLOR_WHITE, padding: PADDING_SIZES.lg }}>
          <Flex vertical gap={60}>
            <Typography.Text style={{ color: COLOR_333, fontSize: FONT_SIZES.huge, fontWeight: FONT_WEIGHTS.semibold }}>
              Notice | Event
            </Typography.Text>
            <EventNoticeForm />
          </Flex>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default EventNoticeDetail;
