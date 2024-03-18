import { FC } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import { useLocation, useNavigate } from 'react-router-dom';

import { IEventNoticeTableData, IMemberShipTableData, IShippingDetailTableData } from '../../types';
import { getFirstPathURL, handleNavigate } from '../../utils';

interface IProps {
  tableColumns: ColumnsType<IMemberShipTableData | IEventNoticeTableData | IShippingDetailTableData>;
  tableData: IMemberShipTableData[] | IEventNoticeTableData[] | IShippingDetailTableData[];
}

const TableComponent: FC<IProps> = ({ tableColumns, tableData }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Table
      columns={tableColumns}
      dataSource={tableData}
      bordered
      tableLayout='fixed'
      pagination={{ position: ['bottomCenter'] }}
      scroll={{ y: 'calc(100vh - 450px)' }}
      onRow={(record) => {
        return {
          onClick: (event) => {
            if (getFirstPathURL(location.pathname) === '/notice-event') {
              handleNavigate(navigate, `/notice-event-detail?no=${record.key}`);
            }
          },
        };
      }}
    />
  );
};

export default TableComponent;
