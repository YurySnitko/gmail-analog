import { Addresse } from '../../../../consts/mails';

export interface MailHeaderProps {
  senderName: string;
  senderEmail: string;
  date: string;
  addressees: Addresse[];
}
