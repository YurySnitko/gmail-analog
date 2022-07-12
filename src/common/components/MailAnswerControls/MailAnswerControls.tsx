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
import { Tooltip } from '@mui/material';
import { FC } from 'react';
import { ButtonWithOptions } from '../../ui-kit/ButtonWithOptions/ButtonWithOptions';
import * as S from './MailAnswerControls.styles';

export const MailAnswerControls: FC = () => {
  return (
    <S.Container>
      <ButtonWithOptions />
      <S.MainControls>
        <Tooltip title="Параметры форматирования">
          <S.IconButtonStld size="small" shape="square">
            <TextFormatRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Прикрепить файлы">
          <S.IconButtonStld size="small" shape="square">
            <AttachFileRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Вставить ссылку">
          <S.IconButtonStld size="small" shape="square">
            <InsertLinkRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Вставить смайлик">
          <S.IconButtonStld size="small" shape="square">
            <MoodRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Вставить ссылку на файлы в Google диске">
          <S.IconButtonStld size="small" shape="square">
            <AddToDriveRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Добавить фото">
          <S.IconButtonStld size="small" shape="square">
            <InsertPhotoOutlined fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Переключатель конфиденциального режима">
          <S.IconButtonStld size="small" shape="square">
            <LockClock fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Вставить подпись">
          <S.IconButtonStld size="small" shape="square">
            <CreateRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
      </S.MainControls>
      <S.OtherControls>
        <Tooltip title="Дополнительно">
          <S.IconButtonStld size="small" shape="square" sx={{ pr: 0, pl: 0 }}>
            <MoreVertRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
        <Tooltip title="Удалить черновик">
          <S.IconButtonStld size="small" shape="square">
            <DeleteRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
      </S.OtherControls>
    </S.Container>
  );
};
