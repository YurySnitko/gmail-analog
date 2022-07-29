import { AnswerMode } from '../ControlsAndAnswerContainer/ControlsAndAnswerContainer.interfaces';

export interface MailAnswerContainerProps {
  answerMode: AnswerMode;
  toggleAnswerContainerMode: (isOpen: boolean) => void;
  toggleAnswerMode: (mode: AnswerMode) => void;
}
