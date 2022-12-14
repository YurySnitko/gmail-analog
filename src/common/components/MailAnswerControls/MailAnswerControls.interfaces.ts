import { EditorState } from 'draft-js';

export interface MailAnswerControlsProps {
  editorState: EditorState;
  onEditorStateChange: (state: EditorState) => void;
  toggleAnswerContainerMode: (isOpen: boolean) => void;
}
