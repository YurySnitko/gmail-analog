export interface MailData {
  _id: string;
  senderName: string;
  senderEmail: string;
  addressees: Addresse[];
  title: string;
  text: string;
  date: string;
  isViewed: boolean;
  avatar?: string;
}

export interface Addresse {
  name: string;
  email: string;
}

export const mails: MailData[] = [
  {
    _id: '1',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: false,
  },
  {
    _id: '2',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: true,
  },
  {
    _id: '3',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: false,
  },
  {
    _id: '4',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: false,
  },
  {
    _id: '5',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: false,
  },
  {
    _id: '6',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: false,
  },
  {
    _id: '7',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: false,
  },
  {
    _id: '8',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: true,
  },
  {
    _id: '9',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: false,
  },
  {
    _id: '10',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: false,
  },
  {
    _id: '11',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: false,
  },
  {
    _id: '12',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: true,
  },
  {
    _id: '13',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: false,
  },
  {
    _id: '14',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: false,
  },
  {
    id: '14',
    senderName: 'Notification Innowise',
    senderEmail: 'notification@innowise-group.com',
    addressees: [
      { name: 'Yury Snitko', email: 'yury.snitko@innowise-group.com' },
    ],
    title: 'Introducing Table Visualization',
    text: `Say hello to dynamic charts, Confluence's new integration`,
    date: '22 июн. 2022 г., 00:22',
    isViewed: false,
  },
];
