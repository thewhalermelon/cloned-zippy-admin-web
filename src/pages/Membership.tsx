import { FC, useState } from 'react';
import { Button, Col, Flex, Row, Tooltip, Typography } from 'antd';
import { FileExcelOutlined } from '@ant-design/icons';

import { COLOR_333, COLOR_WHITE, FONT_SIZES, FONT_WEIGHTS, PADDING_SIZES } from '../constant';
import MainLayout from '../layout';
import SideBar from '../components/SideBar';
import TableComponent from '../components/TableComponent';
import { membershipTableColumns } from '../components/TableComponent/tableColumns';
import { membershipTableData } from '../components/TableComponent/tableData';
import Search, { SearchProps } from 'antd/es/input/Search';
import { IMemberShipTableData } from '../types';
import { exportToExcel } from '../utils';

interface IProps {}

const Membership: FC<IProps> = () => {
  const [tableData, setTableData] = useState<IMemberShipTableData[]>(membershipTableData);

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    if (info?.source === 'input') {
      const data = JSON.parse(JSON.stringify(tableData));
      const res = data.filter((item: IMemberShipTableData) => item.id.includes(value));
      setTableData(res);
    }

    if (info?.source === 'clear') {
      setTableData(membershipTableData);
    }
  };

  return (
    <MainLayout>
      <Row style={{ height: '100vh' }}>
        <SideBar />
        <Col span={20} style={{ backgroundColor: COLOR_WHITE, padding: PADDING_SIZES.lg }}>
          <Flex vertical gap={20}>
            <Typography.Text style={{ color: COLOR_333, fontSize: FONT_SIZES.huge, fontWeight: FONT_WEIGHTS.semibold }}>
              Members
            </Typography.Text>
            <Flex justify='space-between' align='center'>
              <Flex gap={10}>
                <Typography.Text style={{ color: COLOR_333, fontSize: FONT_SIZES.lg }}>
                  Total members: 194 (Light: 180 people | Premium: 14 people)
                </Typography.Text>
                <Tooltip title='Export to Excel'>
                  <Button
                    type='default'
                    shape='circle'
                    icon={<FileExcelOutlined />}
                    onClick={() => exportToExcel(tableData, 'Membership Management')}
                  />
                </Tooltip>
              </Flex>
              <Search
                placeholder='Enter ID in plain text'
                allowClear
                onSearch={onSearch}
                style={{ width: '20%' }}
                size='large'
              />
            </Flex>
            <TableComponent tableColumns={membershipTableColumns} tableData={tableData} />
          </Flex>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Membership;
