import { AnswerMode } from '../../components/ControlsAndAnswerContainer/ControlsAndAnswerContainer.interfaces';

export interface ToWhomToAnswerOptionsProps {
  answerMode: AnswerMode;
  toogleAnswerMode: (mode: AnswerMode) => void;
}
