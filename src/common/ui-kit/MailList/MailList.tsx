import React, { FC } from "react";
import { S } from "./MailList.styles";
import { MailListProps } from "./MailList.interface";
import MailListItem from "../MailListItem/MailListItem";

const MailList: FC<MailListProps> = ({ mailList }) => {
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
        />
      ))}
    </S.MailListGrid>
  );
};

export default MailList;
