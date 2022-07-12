import { MailData } from '../../../../consts/mails';

export interface MailListProps {
  mailList: MailData[];
  selectedMailsIds: string[];
  setSelectedMailsIds: (ids: string[]) => void;
  currentPage: number;
}
