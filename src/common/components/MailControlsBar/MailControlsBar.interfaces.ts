import { AnswerMode } from '../ControlsAndAnswerContainer/ControlsAndAnswerContainer.interfaces';

export interface MailControlsBarProps {
  toogleAnswerContainerMode: (isOpen: boolean) => void;
  toogleAnswerMode: (mode: AnswerMode) => void;
}
