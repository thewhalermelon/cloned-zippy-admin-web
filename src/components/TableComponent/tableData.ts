import { IEventNoticeTableData, IMemberShipTableData, IShippingDetailTableData } from '../../types';

export const membershipTableData: IMemberShipTableData[] = [
  {
    key: 194,
    no: 194,
    id: 'b4b359ccbfe8e2e16cde22a6a7a2cf3120202b983fb2f3d819ebb7935c94cd3b',
    joinDate: '24-06-30',
    membership: 'Light',
    paymentDate: '-',
    expirationDate: '-',
    paymentNumber: 0,
    lastPaymentDate: '-',
  },
  {
    key: 193,
    no: 193,
    id: '81769a9e8104625efb68dbd066f535f6ceab6e24c62e128b42db3b400d0f3242',
    joinDate: '24-05-27',
    membership: 'Premium',
    paymentDate: '24-05-28',
    expirationDate: '24-06-27',
    paymentNumber: 3,
    lastPaymentDate: '24-05-28',
  },
  {
    key: 192,
    no: 192,
    id: 'b4b359ccbfe8e2e16cde22a6a7a2cf3120202b983fb2f3d819ebb7935c94cd3b',
    joinDate: '24-05-20',
    membership: 'Light',
    paymentDate: '-',
    expirationDate: '-',
    paymentNumber: 1,
    lastPaymentDate: '24-05-20',
  },
  {
    key: 191,
    no: 191,
    id: '81769a9e8104625efb68dbd066f535f6ceab6e24c62e128b42db3b400d0f3242',
    joinDate: '24-05-19',
    membership: 'Premium',
    paymentDate: '24-05-20',
    expirationDate: '25-05-19',
    paymentNumber: 0,
    lastPaymentDate: '-',
  },
  {
    key: 190,
    no: 190,
    id: 'b4b359ccbfe8e2e16cde22a6a7a2cf3120202b983fb2f3d819ebb7935c94cd3b',
    joinDate: '24-05-18',
    membership: 'Light',
    paymentDate: '-',
    expirationDate: '-',
    paymentNumber: 2,
    lastPaymentDate: '24-05-15',
  },
  {
    key: 189,
    no: 189,
    id: '81769a9e8104625efb68dbd066f535f6ceab6e24c62e128b42db3b400d0f3242',
    joinDate: '24-05-13',
    membership: 'Premium',
    paymentDate: '24-05-15',
    expirationDate: '24-06-14',
    paymentNumber: 2,
    lastPaymentDate: '24-05-15',
  },
  {
    key: 188,
    no: 188,
    id: 'b4b359ccbfe8e2e16cde22a6a7a2cf3120202b983fb2f3d819ebb7935c94cd3b',
    joinDate: '24-05-10',
    membership: 'Light',
    paymentDate: '-',
    expirationDate: '-',
    paymentNumber: 0,
    lastPaymentDate: '-',
  },
  {
    key: 187,
    no: 187,
    id: '81769a9e8104625efb68dbd066f535f6ceab6e24c62e128b42db3b400d0f3242',
    joinDate: '24-05-10',
    membership: 'Light',
    paymentDate: '-',
    expirationDate: '-',
    paymentNumber: 1,
    lastPaymentDate: '24-05-15',
  },
  {
    key: 186,
    no: 186,
    id: 'b4b359ccbfe8e2e16cde22a6a7a2cf3120202b983fb2f3d819ebb7935c94cd3b',
    joinDate: '24-05-09',
    membership: 'Light',
    paymentDate: '-',
    expirationDate: '-',
    paymentNumber: 0,
    lastPaymentDate: '-',
  },
  {
    key: 185,
    no: 185,
    id: '81769a9e8104625efb68dbd066f535f6ceab6e24c62e128b42db3b400d0f3242',
    joinDate: '24-05-07',
    membership: 'Light',
    paymentDate: '-',
    expirationDate: '-',
    paymentNumber: 0,
    lastPaymentDate: '-',
  },
  {
    key: 185,
    no: 185,
    id: '81769a9e8104625efb68dbd066f535f6ceab6e24c62e128b42db3b400d0f3242',
    joinDate: '24-05-07',
    membership: 'Light',
    paymentDate: '-',
    expirationDate: '-',
    paymentNumber: 0,
    lastPaymentDate: '-',
  },
];

export const eventNoticeTableData: IEventNoticeTableData[] = [
  {
    key: 2,
    no: 2,
    title: 'System update information',
    creationDate: '24-04-25 14:13:32',
    lastModifiedDate: '24-04-30 14:15:23',
  },
  {
    key: 1,
    no: 1,
    title: 'New launch event',
    creationDate: '24-04-25 14:13:32',
    lastModifiedDate: '24-04-30 14:15:23',
  },
];

export const shippingDetailTableData: IShippingDetailTableData[] = [
  {
    key: Math.random() * 100,
    shippingTime: '24-05-30 16:23',
    title: 'System update information' + ' ' + Math.random() * 100,
    linkedPost: 'System update schedule information',
    shippingDestination: 'All members',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-29 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'Light',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-30 16:20',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'Premium',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-28 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'All members',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-27 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'Light',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-26 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'Premium',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-25 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'All members',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-24 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'Light',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-23 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'Premium',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-22 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost:
      'Please show the title of the linked post you selected when sending Please show the title of the linked post you selected when sending',
    shippingDestination: 'Premium',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-30 16:23',
    title: 'System update information' + ' ' + Math.random() * 100,
    linkedPost: 'System update schedule information',
    shippingDestination: 'All members',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-29 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'Light',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-30 16:20',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'Premium',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-28 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'All members',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-27 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'Light',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-26 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'Premium',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-25 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'All members',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-24 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'Light',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-23 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost: 'Please show the title of the linked post you selected when sending',
    shippingDestination: 'Premium',
  },
  {
    key: Math.random() * 100,
    shippingTime: '24-05-22 16:23',
    title: 'Please show the push message title' + ' ' + Math.random() * 100,
    linkedPost:
      'Please show the title of the linked post you selected when sending Please show the title of the linked post you selected when sending',
    shippingDestination: 'Premium',
  },
];