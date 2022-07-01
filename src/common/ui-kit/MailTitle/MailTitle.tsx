import { Typography } from '@mui/material';
import { FC } from 'react';
import { MailTitleProps } from './MailTitle.interfaces';
import * as S from './MailTitle.styles';

export const MailTitle: FC<MailTitleProps> = ({ children }) => {
  return (
    <S.Container>
      <Typography variant="h5">{children}</Typography>
    </S.Container>
  );
};
