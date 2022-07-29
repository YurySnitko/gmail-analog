import { AnswerMode } from '../ControlsAndAnswerContainer/ControlsAndAnswerContainer.interfaces';

export interface ChooseAddresseeProps {
  isEditMode: boolean;
  answerMode: AnswerMode;
  toggleChooseAddresseeEditMode: (isEditMode: boolean) => void;
  toggleAnswerMode: (mode: AnswerMode) => void;
}
