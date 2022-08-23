import {
  ArrowDropDownRounded,
  CheckRounded,
  FormatSizeRounded,
} from '@mui/icons-material';
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from '@mui/material';
import { EditorState, Modifier, RichUtils } from 'draft-js';
import { FC, MouseEvent, useState } from 'react';
import { fontStyleMap } from '../../components/MailAnswerBody/MailAnswerBody';
import { Tooltip } from '../../ui-kit/components/Tooltip/Tooltip';
import { FormatSizeButtonProps } from './FormatSizeButton.interfaces';
import * as S from './FormatSizeButton.styles';

const fontsizes = [
  { key: 'FONT_SIZE_10', value: '10px' },
  { key: 'FONT_SIZE_13', value: '13px' },
  { key: 'FONT_SIZE_18', value: '18px' },
  { key: 'FONT_SIZE_32', value: '32px' },
];

export const FormatSizeButton: FC<FormatSizeButtonProps> = ({
  editorState,
  onEditorStateChange,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const currentStyle = editorState.getCurrentInlineStyle();

  const handleButtonClick = (event: MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (e: MouseEvent, fontSize: string): void => {
    e.preventDefault();
    const selection = editorState.getSelection();

    const nextContentState = Object.keys(fontStyleMap).reduce(
      (contentState, size) => {
        return Modifier.removeInlineStyle(contentState, selection, size);
      },
      editorState.getCurrentContent()
    );

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    );

    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state, size) => {
        return state && size
          ? RichUtils.toggleInlineStyle(state, size)
          : nextEditorState;
      }, nextEditorState);
    }

    if (!currentStyle.has(fontSize)) {
      nextEditorState = RichUtils.toggleInlineStyle(nextEditorState, fontSize);
    }

    onEditorStateChange(nextEditorState);
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Размер">
        <S.IconButtonStld
          size="small"
          shape="square"
          onMouseDown={handleButtonClick}
          active={open}
        >
          <FormatSizeRounded fontSize="small" />
          <ArrowDropDownRounded fontSize="small" />
        </S.IconButtonStld>
      </Tooltip>
      <S.Popper open={open} anchorEl={anchorEl} placement="top-start">
        {fontsizes.map((size) => (
          <MenuItem
            key={size.key}
            onMouseDown={(e): void => handleMenuItemClick(e, size.key)}
          >
            {currentStyle.has(size.key) && (
              <ListItemIcon>
                <CheckRounded fontSize="small" />
              </ListItemIcon>
            )}
            <ListItemText inset={!currentStyle.has(size.key)}>
              <Typography variant="body2">{size.value}</Typography>
            </ListItemText>
          </MenuItem>
        ))}
      </S.Popper>
    </>
  );
};
