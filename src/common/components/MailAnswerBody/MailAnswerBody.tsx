import { FC } from 'react';
import { MailAnswerBodyProps } from './MailAnswerBody.interfaces';
import * as S from './MailAnswerBody.styles';

export const MailAnswerBody: FC<MailAnswerBodyProps> = ({ onClick }) => {
  return (
    <S.Container onClick={onClick}>
      <S.Input disableUnderline fullWidth multiline autoFocus />
    </S.Container>
  );
};
