import {
  DeleteRounded,
  MoreVertRounded,
  TextFormatRounded,
} from '@mui/icons-material';
import { FC, useState } from 'react';
import { ButtonWithOptions } from '../../ui-kit/components/ButtonWithOptions/ButtonWithOptions';
import { Tooltip } from '../../ui-kit/components/Tooltip/Tooltip';
import { RichTextEditorControls } from '../RichTextEditorControls/RichTextEditorControls';
import { mailAnswerControls } from './MailAnswerControls.config';
import { MailAnswerControlsProps } from './MailAnswerControls.interfaces';
import * as S from './MailAnswerControls.styles';

export const MailAnswerControls: FC<MailAnswerControlsProps> = ({
  editorState,
  onEditorStateChange,
  toggleAnswerContainerMode,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isRichTextEditorOpen, setIsRichTextEditorOpen] =
    useState<boolean>(false);

  const toggleFormattingOptions = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setIsRichTextEditorOpen((prev) => !prev);
  };

  const onDeleteDraftsButtonClick = (): void => {
    toggleAnswerContainerMode(false);
  };

  return (
    <S.Container>
      <ButtonWithOptions />
      <S.MainControls>
        <Tooltip title="Параметры форматирования">
          <S.IconButtonStld
            size="small"
            shape="square"
            onMouseDown={toggleFormattingOptions}
            active={isRichTextEditorOpen}
            hoverbackground={'light'}
          >
            <TextFormatRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <RichTextEditorControls
          anchorEl={anchorEl}
          open={isRichTextEditorOpen}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
        {mailAnswerControls.map(({ id, title, Icon }) => (
          <Tooltip key={id} title={title}>
            <S.IconButtonStld
              hoverbackground={'light'}
              size="small"
              shape="square"
            >
              <Icon fontSize="small" />
            </S.IconButtonStld>
          </Tooltip>
        ))}
      </S.MainControls>
      <S.OtherControls>
        <Tooltip title="Дополнительно">
          <S.IconButtonStld
            hoverbackground={'light'}
            size="small"
            shape="square"
            sx={{ pr: 0, pl: 0 }}
          >
            <MoreVertRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Удалить черновик" onClick={onDeleteDraftsButtonClick}>
          <S.IconButtonStld
            hoverbackground={'light'}
            size="small"
            shape="square"
          >
            <DeleteRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
      </S.OtherControls>
    </S.Container>
  );
};
