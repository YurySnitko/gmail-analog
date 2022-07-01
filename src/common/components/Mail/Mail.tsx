import { Avatar } from '@mui/material';
import { FC } from 'react';
import { MailTitle } from '../../ui-kit/MailTitle/MailTitle';
import { MailProps } from './Mail.interfaces';
import * as S from './Mail.styles';
import PersonIcon from '@mui/icons-material/Person';
import { MailHeader } from '../MailHeader/MailHeader';

export const Mail: FC<MailProps> = ({ mailData }) => {
  return (
    <S.MainContainer>
      <MailTitle>{mailData.title}</MailTitle>
      <S.Container>
        <S.AvatarWrapper>
          <Avatar>{mailData.avatar ?? <PersonIcon />}</Avatar>
        </S.AvatarWrapper>
        <S.MailBodyWrapper>
          <MailHeader />
        </S.MailBodyWrapper>
      </S.Container>
    </S.MainContainer>
  );
};
