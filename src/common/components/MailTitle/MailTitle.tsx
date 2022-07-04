import { LocalPrintshop, OpenInNewOutlined } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { FC } from 'react';
import { IconButton } from '../../ui-kit/IconButton/IconButton';
import { Tag } from '../../ui-kit/Tag/Tag';
import * as S from './MailTitle.styles';

export const MailTitle: FC = () => {
  const openInNewWindow = (): void => {
    window.open(
      document.URL,
      '_blank',
      'location=yes,height=570,width=800,scrollbars=yes,status=yes,top=100,left=150'
    );
  };

  return (
    <S.Container>
      <S.TitleWithTagsWrapper>
        <S.TitleTypography variant="h5">Обновление HRM</S.TitleTypography>
        <Tag>Входящие</Tag>
      </S.TitleWithTagsWrapper>
      <S.Toolbar>
        <Tooltip title="Печатать все">
          <IconButton>
            <LocalPrintshop fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="В новом окне">
          <IconButton onClick={openInNewWindow}>
            <OpenInNewOutlined fontSize="small" />
          </IconButton>
        </Tooltip>
      </S.Toolbar>
    </S.Container>
  );
};
