import {
  AddToDriveRounded,
  AttachFileRounded,
  CreateRounded,
  DeleteRounded,
  InsertLinkRounded,
  InsertPhotoOutlined,
  LockClock,
  MoodRounded,
  MoreVertRounded,
  TextFormatRounded,
} from '@mui/icons-material';
import { FC } from 'react';
import { ButtonWithOptions } from '../../ui-kit/components/ButtonWithOptions/ButtonWithOptions';
import { Tooltip } from '../../ui-kit/components/Tooltip/Tooltip';
import { MailAnswerControlsProps } from './MailAnswerControls.interfaces';
import * as S from './MailAnswerControls.styles';

export const MailAnswerControls: FC<MailAnswerControlsProps> = ({
  toggleAnswerContainerMode,
}) => {
  const onDeleteDraftsButtonClick = (): void => {
    toggleAnswerContainerMode(false);
  };

  return (
    <S.Container>
      <ButtonWithOptions />
      <S.MainControls>
        <Tooltip title="Параметры форматирования">
          <S.IconButtonStld
            hoverBackground={'light'}
            size="small"
            shape="square"
          >
            <TextFormatRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Прикрепить файлы">
          <S.IconButtonStld
            hoverBackground={'light'}
            size="small"
            shape="square"
          >
            <AttachFileRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Вставить ссылку">
          <S.IconButtonStld
            hoverBackground={'light'}
            size="small"
            shape="square"
          >
            <InsertLinkRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Вставить смайлик">
          <S.IconButtonStld
            hoverBackground={'light'}
            size="small"
            shape="square"
          >
            <MoodRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Вставить ссылку на файлы в Google диске">
          <S.IconButtonStld
            hoverBackground={'light'}
            size="small"
            shape="square"
          >
            <AddToDriveRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Добавить фото">
          <S.IconButtonStld
            hoverBackground={'light'}
            size="small"
            shape="square"
          >
            <InsertPhotoOutlined fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Переключатель конфиденциального режима">
          <S.IconButtonStld
            hoverBackground={'light'}
            size="small"
            shape="square"
          >
            <LockClock fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Вставить подпись">
          <S.IconButtonStld
            hoverBackground={'light'}
            size="small"
            shape="square"
          >
            <CreateRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
      </S.MainControls>
      <S.OtherControls>
        <Tooltip title="Дополнительно">
          <S.IconButtonStld
            hoverBackground={'light'}
            size="small"
            shape="square"
            sx={{ pr: 0, pl: 0 }}
          >
            <MoreVertRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Удалить черновик" onClick={onDeleteDraftsButtonClick}>
          <S.IconButtonStld
            hoverBackground={'light'}
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
