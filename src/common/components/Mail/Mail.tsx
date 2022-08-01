import { Avatar } from '@mui/material';
import { FC } from 'react';
import { MailTitle } from '../MailTitle/MailTitle';
import { MailProps } from './Mail.interfaces';
import * as S from './Mail.styles';
import { MailHeader } from '../MailHeader/MailHeader';
import { MailBody } from '../MailBody/MailBody';
import { ControlsAndAnswerContainer } from '../ControlsAndAnswerContainer/ControlsAndAnswerContainer';

export const Mail: FC<MailProps> = ({ mailData }) => {
  return (
    <S.MainContainer>
      <MailTitle title={mailData.title} />
      <S.Container>
        <S.AvatarWrapper>
          <Avatar src={mailData.avatar} />
        </S.AvatarWrapper>
        <S.MailBodyWrapper>
          <MailHeader
            senderName={mailData.senderName}
            senderEmail={mailData.senderEmail}
            date={mailData.date}
            addressees={mailData.addressees}
          />
          <MailBody text={mailData.text} />
        </S.MailBodyWrapper>
      </S.Container>
      <ControlsAndAnswerContainer />
    </S.MainContainer>
  );
};
