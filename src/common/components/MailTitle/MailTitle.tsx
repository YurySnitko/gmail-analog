import { LocalPrintshop, OpenInNewOutlined } from '@mui/icons-material';
import { FC } from 'react';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';
import { Tag } from '../../ui-kit/components/Tag/Tag';
import { Tooltip } from '../../ui-kit/components/Tooltip/Tooltip';
import { MailTitleProps } from './MailTitle.interfaces';
import * as S from './MailTitle.styles';

export const MailTitle: FC<MailTitleProps> = ({ title }) => {
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
        <S.TitleTypography variant="h5">{title}</S.TitleTypography>
        <Tag>Входящие</Tag>
      </S.TitleWithTagsWrapper>
      <S.Toolbar>
        <Tooltip title="Печатать все">
          <IconButton hoverbackground={'light'}>
            <LocalPrintshop fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="В новом окне">
          <IconButton hoverbackground={'light'} onClick={openInNewWindow}>
            <OpenInNewOutlined fontSize="small" />
          </IconButton>
        </Tooltip>
      </S.Toolbar>
    </S.Container>
  );
};
