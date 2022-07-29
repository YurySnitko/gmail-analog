import { Addresse } from '../../../mocked/mails';

export interface MailHeaderProps {
  senderName: string;
  senderEmail: string;
  date: string;
  addressees: Addresse[];
}
