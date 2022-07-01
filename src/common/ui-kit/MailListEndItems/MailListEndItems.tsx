import { Tooltip } from '@mui/material';
import { FC } from 'react';
import { IconButton } from '../IconButton/IconButton';
import { MailListEndItemsProps } from './MailListEndItems.interfaces';
import * as S from './MailListEndItems.styles';
import {
  AccessTimeOutlined,
  ArchiveOutlined,
  DeleteOutlined,
  EmailOutlined,
} from '@mui/icons-material';

export const MailListEndItems: FC<MailListEndItemsProps> = ({
  isHover,
  date,
}) => {
  if (isHover) {
    return (
      <S.EndLineWrapper>
        <Tooltip title={'Архивировать'}>
          <IconButton>
            <ArchiveOutlined fontSize={'small'} />
          </IconButton>
        </Tooltip>
        <Tooltip title={'Удалить'}>
          <IconButton>
            <DeleteOutlined fontSize={'small'} />
          </IconButton>
        </Tooltip>
        <Tooltip title={'Отметить как прочитанное'}>
          <IconButton>
            <AccessTimeOutlined fontSize={'small'} />
          </IconButton>
        </Tooltip>
        <Tooltip title={'Отложить'}>
          <IconButton>
            <EmailOutlined fontSize={'small'} />
          </IconButton>
        </Tooltip>
      </S.EndLineWrapper>
    );
  }
  return (
    <S.EndLineWrapper>
      <S.TimeText>{date}</S.TimeText>
    </S.EndLineWrapper>
  );
};
