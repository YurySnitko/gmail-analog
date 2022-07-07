import React, { FC, useEffect, useState } from 'react';
import { S } from './MailList.styles';
import { MailListProps } from './MailList.interfaces';
import MailListItem from '../MailListItem/MailListItem';
import { Mail } from '../../../../consts/mails';
import { useEvent } from '../../../hooks/useEvent.hook';
import { useAppSelector } from '../../../hooks/redux.hook';

const MailList: FC<MailListProps> = ({
  setSelectedMailsIds,
  selectedMailsIds,
  mailList,
}) => {
  const [currentPageMails, setCurrentPageMails] = useState<Mail[]>([]);
  const { currentPage, pageSize } = useAppSelector((state) => state.pagination);

  useEffect(() => {
    const begin = (currentPage - 1) * pageSize;
    const end = begin + pageSize;
    setCurrentPageMails(mailList.slice(begin, end));
  }, [currentPage]);

  const checkboxCheckHandler = useEvent((isChecked: boolean, id: string) => {
    setSelectedMailsIds(
      isChecked
        ? selectedMailsIds.filter((item) => item !== id)
        : [...selectedMailsIds, id]
    );
  });

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
