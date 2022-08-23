import { TypographyProps } from '@mui/material';
import { EditorState } from 'draft-js';

export interface FormatSizeButtonProps {
  editorState: EditorState;
  onEditorStateChange: (state: EditorState) => void;
}

export interface FormatSizeTypographyProps extends TypographyProps {
  fontSize: '10px' | '13px' | '18px' | '22px';
}
