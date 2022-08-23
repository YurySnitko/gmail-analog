import { EditorState } from 'draft-js';

export interface RichTextEditorControlsProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  editorState: EditorState;
  onEditorStateChange: (state: EditorState) => void;
}
