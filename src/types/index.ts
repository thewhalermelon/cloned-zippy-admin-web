import { DatePickerType } from 'antd/es/date-picker';

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface IEventNoticeTableData {
  key: number;
  no: React.Key;
  title: string;
  creationDate: string;
  lastModifiedDate: string;
}

export interface IMemberShipTableData {
  key: number;
  no: React.Key;
  id: string;
  joinDate: string;
  membership: string;
  paymentDate: string;
  expirationDate: string;
  paymentNumber: number;
  lastPaymentDate: string;
}

export interface IShippingDetailTableData {
  key: number;
  shippingTime: string;
  title: string;
  linkedPost: string;
  shippingDestination: 'All members' | 'Premium' | 'Light';
}

export type LoginFieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

export type EventNoticeFieldType = {
  title: string;
  detail: string;
};

export type PushMessageFieldType = {
  title: string;
  detail: string;
  timeToShip: string;
  placeToShip: string;
  datePicker: any;
};

export type ConnectionPostFieldType = {
  connectionPost: string;
};

export interface ApiResponse<T> {
  data: T;
  error?: string;
}
