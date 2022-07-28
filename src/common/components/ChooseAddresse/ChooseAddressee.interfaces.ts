import { AnswerMode } from '../ControlsAndAnswerContainer/ControlsAndAnswerContainer.interfaces';

export interface ChooseAddresseeProps {
  isEditMode: boolean;
  answerMode: AnswerMode;
  toogleChooseAddresseeEditMode: (isEditMode: boolean) => void;
  toogleAnswerMode: (mode: AnswerMode) => void;
}
