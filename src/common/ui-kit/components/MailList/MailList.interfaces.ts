import { Mail } from '../../../../../consts/mails';

export interface MailListProps {
  mailList: Mail[];
  selectedMailsIds: string[];
  setSelectedMailsIds: (ids: string[]) => void;
}
