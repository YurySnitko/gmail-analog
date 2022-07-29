import { FC } from 'react';
import { MailBodyProps } from './MailBody.interfaces';
import * as S from './MailBody.styles';

export const MailBody: FC<MailBodyProps> = ({ text }) => {
  return <S.Container>{text.repeat(30)}</S.Container>;
};
