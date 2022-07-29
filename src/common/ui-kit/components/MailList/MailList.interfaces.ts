<<<<<<< HEAD:src/common/ui-kit/MailList/MailList.interfaces.ts
import { MailData } from '../../../../consts/mails';
=======
import { MailData } from '../../../../mocked/mails';
>>>>>>> bbb6ad79c5052c76e9ab96e9ee5c635ac0b8ae20:src/common/ui-kit/components/MailList/MailList.interfaces.ts

export interface MailListProps {
  mailList: MailData[];
  selectedMailsIds: string[];
  setSelectedMailsIds: (ids: string[]) => void;
}
