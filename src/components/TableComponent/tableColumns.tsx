import { ColumnsType } from 'antd/es/table';
import { IEventNoticeTableData, IMemberShipTableData, IShippingDetailTableData } from '../../types';

export const membershipTableColumns: ColumnsType<
  IMemberShipTableData | IEventNoticeTableData | IShippingDetailTableData
> = [
  {
    title: '',
    dataIndex: 'no',
    key: 'no',
    align: 'center',
    width: '5%',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    width: '25%',
  },
  {
    title: 'Membership',
    children: [
      {
        title: 'Join Date',
        dataIndex: 'joinDate',
        key: 'join-date',
        align: 'center',
        width: '9%',
      },
      {
        title: 'Category',
        dataIndex: 'membership',
        key: 'membership',
        align: 'center',
        width: '9%',
      },
      {
        title: 'Payment Date',
        dataIndex: 'paymentDate',
        key: 'payment-date',
        align: 'center',
        width: '9%',
      },
      {
        title: 'Expiration Date',
        dataIndex: 'expirationDate',
        key: 'expiration-date',
        align: 'center',
        width: '9%',
      },
    ],
  },
  {
    title: 'Ziggy Report',
    children: [
      {
        title: 'Cumulative number of payments',
        dataIndex: 'paymentNumber',
        key: 'payment-number',
        align: 'center',
        width: '20%',
      },
      {
        title: 'Last payment date',
        dataIndex: 'lastPaymentDate',
        key: 'last-payment-date',
        align: 'center',
        width: '14%',
      },
    ],
  },
];

export const eventNoticeTableColumns: ColumnsType<
  IMemberShipTableData | IEventNoticeTableData | IShippingDetailTableData
> = [
  {
    title: '',
    dataIndex: 'no',
    key: 'no',
    align: 'center',
    width: '5%',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    align: 'center',
    width: '45%',
  },
  {
    title: 'Date of Original Creation',
    dataIndex: 'creationDate',
    key: 'creation-date',
    align: 'center',
    width: '25%',
  },
  {
    title: 'Last Modified Date',
    dataIndex: 'lastModifiedDate',
    key: 'lastModified-date',
    align: 'center',
    width: '25%',
  },
];

export const shippingDetailTableColumns: ColumnsType<
  IMemberShipTableData | IEventNoticeTableData | IShippingDetailTableData
> = [
  {
    title: 'Shipping Time',
    dataIndex: 'shippingTime',
    key: 'shipping-time',
    align: 'center',
    width: '15%',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    align: 'center',
    width: '35%',
  },
  {
    title: 'Linked Post',
    dataIndex: 'linkedPost',
    key: 'linked-post',
    align: 'center',
    width: '35%',
  },
  {
    title: 'Shipping Destination',
    dataIndex: 'shippingDestination',
    key: 'shipping-destination',
    align: 'center',
    width: '15%',
  },
];
