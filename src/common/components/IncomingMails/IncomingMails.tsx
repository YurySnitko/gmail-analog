import React, { useState } from 'react';
import MailListHeader from '../../ui-kit/MailListHeader/MailListHeader';
import MailList from '../../ui-kit/MailList/MailList';
import { mails } from '../../../../consts/mails';

const IncomingMails = () => {
  const [selectedMailsIds, setSelectedMailsIds] = useState<string[]>([]);

  const setSelectedMailsIdsHandler = (ids: string[]) => {
    setSelectedMailsIds(ids);
  };

  return (
    <div>
      <MailListHeader
        selectedMailsIds={selectedMailsIds}
        setSelectedMailsIds={setSelectedMailsIdsHandler}
      />
      <MailList
        mailList={mails}
        selectedMailsIds={selectedMailsIds}
        setSelectedMailsIds={setSelectedMailsIdsHandler}
      />
    </div>
  );
};

export default IncomingMails;
