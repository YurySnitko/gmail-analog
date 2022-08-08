import { Tooltip } from '@mui/material';
import { FC, useContext } from 'react';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';
import { MailListEndItemsProps } from './MailListEndItems.interfaces';
import * as S from './MailListEndItems.styles';
import {
  AccessTimeOutlined,
  ArchiveOutlined,
  DeleteOutlined,
  EmailOutlined,
} from '@mui/icons-material';
import { LocalizationContext } from '../../ui-kit/LocalizationProvider/LocalizationProvider';

export const MailListEndItems: FC<MailListEndItemsProps> = ({
  isHover,
  date,
}) => {
  const t = useContext(LocalizationContext);

  if (isHover) {
    return (
      <S.EndLineWrapper>
        <Tooltip title={t.mailsArchiveTooltip}>
          <IconButton>
            <ArchiveOutlined fontSize={'small'} />
          </IconButton>
        </Tooltip>
        <Tooltip title={t.mailsDeleteTooltip}>
          <IconButton>
            <DeleteOutlined fontSize={'small'} />
          </IconButton>
        </Tooltip>
        <Tooltip title={t.mailsSnoozeTooltip}>
          <IconButton>
            <AccessTimeOutlined fontSize={'small'} />
          </IconButton>
        </Tooltip>
        <Tooltip title={t.mailsDeleteMarkAsRead}>
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
