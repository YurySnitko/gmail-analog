import {
  FormatBoldRounded,
  FormatItalicRounded,
  FormatUnderlinedRounded,
  RedoRounded,
  StrikethroughSRounded,
  UndoRounded,
} from '@mui/icons-material';
import { FC, MouseEvent } from 'react';
import { Tooltip } from '../../ui-kit/components/Tooltip/Tooltip';
import { RichTextEditorControlsProps } from './RichTextEditorControls.interfaces';
import * as S from './RichTextEditorControls.styles';
import { EditorState, RichUtils } from 'draft-js';
import { Grow } from '@mui/material';
import { FormatSizeButton } from '../../controls/FormatSizeButton/FormatSizeButton';

export const RichTextEditorControls: FC<RichTextEditorControlsProps> = ({
  open,
  anchorEl,
  editorState,
  onEditorStateChange,
}) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  const handleToggleClick = (e: MouseEvent, inlineStyle: string): void => {
    e.preventDefault();
    onEditorStateChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const onUndoClick = (e: MouseEvent): void => {
    e.preventDefault();
    onEditorStateChange(EditorState.undo(editorState));
  };

  const onRedoClick = (e: MouseEvent): void => {
    e.preventDefault();
    onEditorStateChange(EditorState.redo(editorState));
  };

  return (
    <S.Popper open={open} anchorEl={anchorEl} placement="top">
      <Grow in={open}>
        <S.Paper elevation={3}>
          <Tooltip title="Отменить">
            <span>
              <S.IconButtonStld
                size="small"
                shape="square"
                disabled={editorState.getUndoStack().size <= 0}
                onClick={onUndoClick}
              >
                <UndoRounded fontSize="small" />
              </S.IconButtonStld>
            </span>
          </Tooltip>
          <Tooltip title="Повторить">
            <span>
              <S.IconButtonStld
                size="small"
                shape="square"
                disabled={editorState.getRedoStack().size <= 0}
                onClick={onRedoClick}
              >
                <RedoRounded fontSize="small" />
              </S.IconButtonStld>
            </span>
          </Tooltip>
          <FormatSizeButton
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
          />
          <Tooltip title="Полужирный">
            <S.IconButtonStld
              size="small"
              shape="square"
              onMouseDown={(e): void => handleToggleClick(e, 'BOLD')}
              active={currentStyle.has('BOLD')}
            >
              <FormatBoldRounded fontSize="small" />
            </S.IconButtonStld>
          </Tooltip>
          <Tooltip title="Курсив">
            <S.IconButtonStld
              size="small"
              shape="square"
              onMouseDown={(e): void => handleToggleClick(e, 'ITALIC')}
              active={currentStyle.has('ITALIC')}
            >
              <FormatItalicRounded fontSize="small" />
            </S.IconButtonStld>
          </Tooltip>
          <Tooltip title="Подчеркнутый">
            <S.IconButtonStld
              size="small"
              shape="square"
              onMouseDown={(e): void => handleToggleClick(e, 'UNDERLINE')}
              active={currentStyle.has('UNDERLINE')}
            >
              <FormatUnderlinedRounded fontSize="small" />
            </S.IconButtonStld>
          </Tooltip>
          <Tooltip title="Зачеркнутый">
            <S.IconButtonStld
              size="small"
              shape="square"
              onMouseDown={(e): void => handleToggleClick(e, 'STRIKETHROUGH')}
              active={currentStyle.has('STRIKETHROUGH')}
            >
              <StrikethroughSRounded fontSize="small" />
            </S.IconButtonStld>
          </Tooltip>
        </S.Paper>
      </Grow>
    </S.Popper>
  );
};
