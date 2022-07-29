import { AnswerMode } from '../../../components/ControlsAndAnswerContainer/ControlsAndAnswerContainer.interfaces';

export interface ToWhomToAnswerOptionsProps {
  answerMode: AnswerMode;
  toggleAnswerMode: (mode: AnswerMode) => void;
}
