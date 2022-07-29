import { AnswerMode } from '../ControlsAndAnswerContainer/ControlsAndAnswerContainer.interfaces';

export interface MailAnswerBodyProps {
  toggleChooseAddresseeEditMode: (isEditMode: boolean) => void;
  answerMode: AnswerMode;
}
