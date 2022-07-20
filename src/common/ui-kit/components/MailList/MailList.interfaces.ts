import { MailData } from '../../../../mocked/mails';

export interface MailListProps {
  mailList: MailData[];
  selectedMailsIds: string[];
  setSelectedMailsIds: (ids: string[]) => void;
}
