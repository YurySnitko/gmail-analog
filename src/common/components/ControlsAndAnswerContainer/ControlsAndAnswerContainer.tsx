import { FC, useState } from 'react';
import { MailAnswerContainer } from '../MailAnswerContainer/MailAnswerContainer';
import { MailControlsBar } from '../MailControlsBar/MailControlsBar';
import * as S from './ControlsAndAnswerContainer.styles';

export const ControlsAndAnswerContainer: FC = () => {
  const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false);

  const toogleAnswerMode = (): void => {
    setIsAnswerOpen((prev) => !prev);
  };

  return (
    <S.Container>
      {isAnswerOpen ? (
        <MailAnswerContainer toogleAnswerMode={toogleAnswerMode} />
      ) : (
        <MailControlsBar toogleAnswerMode={toogleAnswerMode} />
      )}
    </S.Container>
  );
};
