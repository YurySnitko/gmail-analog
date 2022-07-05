import { Avatar } from '@mui/material';
import { FC } from 'react';
import { MailTitle } from '../MailTitle/MailTitle';
import { MailProps } from './Mail.interfaces';
import * as S from './Mail.styles';
import PersonIcon from '@mui/icons-material/Person';
import { MailHeader } from '../MailHeader/MailHeader';
import { MailBody } from '../MailBody/MailBody';
import { MailControlsBar } from '../MailControlsBar/MailControlsBar';

export const Mail: FC<MailProps> = ({ mailData }) => {
  return (
    <S.MainContainer>
      <MailTitle title={mailData.title} />
      <S.Container>
        <S.AvatarWrapper>
          <Avatar>{mailData.avatar ?? <PersonIcon />}</Avatar>
        </S.AvatarWrapper>
        <S.MailBodyWrapper>
          <MailHeader
            senderName={mailData.senderName}
            senderEmail={mailData.senderEmail}
            date={mailData.date}
            addressees={mailData.addressees}
          />
          <MailBody />
        </S.MailBodyWrapper>
      </S.Container>
      <MailControlsBar />
    </S.MainContainer>
  );
};
