import React, { FC, useCallback, useEffect, useState } from 'react';
import { S } from './MailList.styles';
import { MailListProps } from './MailList.interfaces';
import MailListItem from '../MailListItem/MailListItem';
import { Mail } from '../../../../consts/mails';

const MailList: FC<MailListProps> = ({
  setSelectedMailsIds,
  selectedMailsIds,
  mailList,
  currentPage,
}) => {
  const [currentPageMails, setCurrentPageMails] = useState<Mail[]>([]);
  const PAGE_SIZE = 10;

  useEffect(() => {
    const begin = (currentPage - 1) * PAGE_SIZE;
    const end = begin + PAGE_SIZE;
    setCurrentPageMails(mailList.slice(begin, end));
  }, [currentPage]);

  const checkboxCheckHandler = useCallback((isChecked: boolean, id: string) => {
    setSelectedMailsIds(
      isChecked
        ? selectedMailsIds.filter((item) => item !== id)
        : [...selectedMailsIds, id]
    );
  }, []);

  return (
    <S.MailListGrid>
      {currentPageMails.length > 0 &&
        currentPageMails.map((mail) => (
          <MailListItem
            key={mail.id}
            id={mail.id}
            sender={mail.sender}
            title={mail.title}
            text={mail.text}
            date={mail.date}
            isViewed={mail.isViewed}
            isChecked={selectedMailsIds.includes(mail.id)}
            checkboxCheckHandler={checkboxCheckHandler}
          />
        ))}
    </S.MailListGrid>
  );
};

export default MailList;
