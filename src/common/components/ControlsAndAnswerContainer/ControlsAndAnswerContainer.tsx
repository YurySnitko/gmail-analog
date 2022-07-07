import { FC, useState } from 'react';
import { MailAnswerContainer } from '../MailAnswerContainer/MailAnswerContainer';
import { MailControlsBar } from '../MailControlsBar/MailControlsBar';
import * as S from './ControlsAndAnswerContainer.styles';

export const ControlsAndAnswerContainer: FC = () => {
  const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false);

  const onAnswerClick = (): void => {
    setIsAnswerOpen(true);
  };

  return (
    <S.Container>
      {isAnswerOpen ? (
        <MailAnswerContainer />
      ) : (
        <MailControlsBar onAnswerClick={onAnswerClick} />
      )}
    </S.Container>
  );
};
