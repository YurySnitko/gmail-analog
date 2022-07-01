import React, { FC } from 'react';
import { S } from './MailList.styles';
import { MailListProps } from './MailList.interface';
import MailListItem from '../MailListItem/MailListItem';
import { useRouter } from 'next/router';

const MailList: FC<MailListProps> = ({ mailList }) => {
  const router = useRouter();

  const onMailListItemClick = (mailId: string): void => {
    router.push(`${router.asPath}/${mailId}`);
  };
  return (
    <S.MailListGrid>
      {mailList.map((mail) => (
        <MailListItem
          key={mail.id}
          id={mail.id}
          sender={mail.sender}
          title={mail.title}
          text={mail.text}
          date={mail.date}
          isViewed={mail.isViewed}
          onMailListItemClick={(): void => onMailListItemClick(mail.id)}
        />
      ))}
    </S.MailListGrid>
  );
};

export default MailList;
