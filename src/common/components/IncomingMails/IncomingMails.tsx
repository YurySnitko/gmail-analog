import React, { useState } from 'react';
import MailListHeader from '../../ui-kit/MailListHeader/MailListHeader';
import MailList from '../../ui-kit/MailList/MailList';
import { mails } from '../../../../consts/mails';

const IncomingMails = () => {
  const [selectedMailsIds, setSelectedMailsIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const setSelectedMailsIdsHandler = (ids: string[]) => {
    setSelectedMailsIds(ids);
  };

  const setCurrentPageHandler = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <div>
      <MailListHeader
        selectedMailsIds={selectedMailsIds}
        setSelectedMailsIds={setSelectedMailsIdsHandler}
        currentPage={currentPage}
        setCurrentPage={setCurrentPageHandler}
      />
      <MailList
        mailList={mails}
        selectedMailsIds={selectedMailsIds}
        setSelectedMailsIds={setSelectedMailsIdsHandler}
        currentPage={currentPage}
      />
    </div>
  );
};

export default IncomingMails;
