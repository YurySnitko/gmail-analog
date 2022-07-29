import React, { FC, useEffect, useState } from 'react';
import { S } from './MailList.styles';
import { MailListProps } from './MailList.interfaces';
import MailListItem from '../MailListItem/MailListItem';
import { useAppSelector } from '../../../../hooks/redux.hook';
import { MailData } from '../../../../mocked/mails';
import { useEvent } from '../../../../hooks/useEvent.hook';
import { useRouter } from 'next/router';

const MailList: FC<MailListProps> = ({
  setSelectedMailsIds,
  selectedMailsIds,
  mailList,
}) => {
  const { currentPage, pageSize } = useAppSelector((state) => state.pagination);
  const [currentPageMails, setCurrentPageMails] = useState<MailData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const begin = (currentPage - 1) * pageSize;
    const end = begin + pageSize;
    setCurrentPageMails(mailList.slice(begin, end));
  }, [currentPage, mailList, pageSize]);

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
