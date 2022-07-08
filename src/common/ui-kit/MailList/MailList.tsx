import React, { FC, useEffect, useState } from 'react';
import { S } from './MailList.styles';
import { MailListProps } from './MailList.interfaces';
import MailListItem from '../MailListItem/MailListItem';
import { MailData } from '../../../../consts/mails';
import { useEvent } from '../../../hooks/useEvent.hook';
import { useRouter } from 'next/router';

const MailList: FC<MailListProps> = ({
  setSelectedMailsIds,
  selectedMailsIds,
  mailList,
  currentPage,
}) => {
  const [currentPageMails, setCurrentPageMails] = useState<MailData[]>([]);
  const PAGE_SIZE = 10;
  const router = useRouter();

  useEffect(() => {
    const begin = (currentPage - 1) * PAGE_SIZE;
    const end = begin + PAGE_SIZE;
    setCurrentPageMails(mailList.slice(begin, end));
  }, [currentPage, mailList]);

  const checkboxCheckHandler = useEvent((isChecked: boolean, id: string) => {
    setSelectedMailsIds(
      isChecked
        ? selectedMailsIds.filter((item) => item !== id)
        : [...selectedMailsIds, id]
    );
  });

  const onMailListItemClick = (mailId: string): void => {
    router.push(`${router.asPath}/${mailId}`);
  };

  return (
    <S.MailListGrid>
      {currentPageMails.length > 0 &&
        currentPageMails.map((mail) => (
          <MailListItem
            key={mail.id}
            id={mail.id}
            senderName={mail.senderName}
            title={mail.title}
            text={mail.text}
            date={mail.date}
            isViewed={mail.isViewed}
            isChecked={selectedMailsIds.includes(mail.id)}
            checkboxCheckHandler={checkboxCheckHandler}
            onMailListItemClick={onMailListItemClick}
          />
        ))}
    </S.MailListGrid>
  );
};

export default MailList;
