import { AnswerMode } from '../ControlsAndAnswerContainer/ControlsAndAnswerContainer.interfaces';

export interface MailControlsBarProps {
  toggleAnswerContainerMode: (isOpen: boolean) => void;
  toggleAnswerMode: (mode: AnswerMode) => void;
}
