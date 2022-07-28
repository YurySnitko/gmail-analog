import { FC, useState } from 'react';
import { MailAnswerContainer } from '../MailAnswerContainer/MailAnswerContainer';
import { MailControlsBar } from '../MailControlsBar/MailControlsBar';
import { AnswerMode } from './ControlsAndAnswerContainer.interfaces';
import * as S from './ControlsAndAnswerContainer.styles';

export const ControlsAndAnswerContainer: FC = () => {
  const [isAnswerContainerOpen, setIsAnswerContainerOpen] =
    useState<boolean>(false);
  const [answerMode, setAnswerMode] = useState<AnswerMode>('reply');

  const toogleAnswerContainerMode = (isOpen: boolean): void => {
    setIsAnswerContainerOpen(isOpen);
  };

  const toogleAnswerMode = (mode: AnswerMode): void => {
    setAnswerMode(mode);
  };

  return (
    <S.Container>
      {isAnswerContainerOpen ? (
        <MailAnswerContainer
          answerMode={answerMode}
          toogleAnswerMode={toogleAnswerMode}
          toogleAnswerContainerMode={toogleAnswerContainerMode}
        />
      ) : (
        <MailControlsBar
          toogleAnswerContainerMode={toogleAnswerContainerMode}
          toogleAnswerMode={toogleAnswerMode}
        />
      )}
    </S.Container>
  );
};
