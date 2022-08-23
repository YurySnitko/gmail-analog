import { AnswerMode } from '../ControlsAndAnswerContainer/ControlsAndAnswerContainer.interfaces';
import { EditorState } from 'draft-js';

export interface MailAnswerBodyProps {
  answerMode: AnswerMode;
  editorState: EditorState;
  onEditorStateChange: (state: EditorState) => void;
  toggleChooseAddresseeEditMode: (isEditMode: boolean) => void;
}
