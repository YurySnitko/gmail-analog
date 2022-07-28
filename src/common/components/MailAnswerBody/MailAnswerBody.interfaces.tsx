import { AnswerMode } from '../ControlsAndAnswerContainer/ControlsAndAnswerContainer.interfaces';

export interface MailAnswerBodyProps {
  toogleChooseAddresseeEditMode: (isEditMode: boolean) => void;
  answerMode: AnswerMode;
}
