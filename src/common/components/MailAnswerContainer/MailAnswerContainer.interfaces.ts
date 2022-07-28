import { AnswerMode } from '../ControlsAndAnswerContainer/ControlsAndAnswerContainer.interfaces';

export interface MailAnswerContainerProps {
  answerMode: AnswerMode;
  toogleAnswerContainerMode: (isOpen: boolean) => void;
  toogleAnswerMode: (mode: AnswerMode) => void;
}
