import { FC } from "react";
import { mails } from "../../consts/mails";
import MailList from "../../src/common/ui-kit/MailList/MailList";

const Inbox: FC = () => {
  return (
    <div>
      <MailList mailList={mails} />
    </div>
  );
};

export default Inbox;
