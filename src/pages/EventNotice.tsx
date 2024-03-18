import { FC } from 'react';
import { Button, Col, Flex, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import MainLayout from '../layout';
import SideBar from '../components/SideBar';
import TableComponent from '../components/TableComponent';
import { eventNoticeTableColumns } from '../components/TableComponent/tableColumns';
import { eventNoticeTableData } from '../components/TableComponent/tableData';
import { COLOR_333, COLOR_WHITE, FONT_SIZES, FONT_WEIGHTS, PADDING_SIZES } from '../constant';
import { handleNavigate } from '../utils';

interface IProps {}

const EventNotice: FC<IProps> = () => {
  let navigate = useNavigate();

  return (
    <MainLayout>
      <Row style={{ height: '100vh' }}>
        <SideBar />
        <Col span={20} style={{ backgroundColor: COLOR_WHITE, padding: PADDING_SIZES.lg }}>
          <Flex vertical gap={20}>
            <Typography.Text style={{ color: COLOR_333, fontSize: FONT_SIZES.huge, fontWeight: FONT_WEIGHTS.semibold }}>
              Notice | Event
            </Typography.Text>
            <Flex justify='end'>
              <Button
                type='primary'
                htmlType='button'
                size='large'
                style={{ paddingLeft: PADDING_SIZES.xl, paddingRight: PADDING_SIZES.xl }}
                onClick={() => handleNavigate(navigate, '/notice-event-detail')}
              >
                Write
              </Button>
            </Flex>
            <TableComponent tableColumns={eventNoticeTableColumns} tableData={eventNoticeTableData} />
          </Flex>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default EventNotice;
