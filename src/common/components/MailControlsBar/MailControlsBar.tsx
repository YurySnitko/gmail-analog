import { ShortcutOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FC } from 'react';
import { MailControlsBarProps } from './MailControlsBar.interfaces';
import * as S from './MailControlsBar.styles';

export const MailControlsBar: FC<MailControlsBarProps> = ({
  toogleAnswerContainerMode,
  toogleAnswerMode,
}) => {
  const onReplyButtonClick = (): void => {
    toogleAnswerContainerMode(true);
    toogleAnswerMode('reply');
  };

  const onForwardButtonClick = (): void => {
    toogleAnswerContainerMode(true);
    toogleAnswerMode('forward');
  };

  return (
    <S.Container>
      <Button
        onClick={onReplyButtonClick}
        variant="outlined"
        color="inherit"
        startIcon={<S.ShortcutOutlinedLeft />}
      >
        Ответить
      </Button>
      <Button
        onClick={onForwardButtonClick}
        variant="outlined"
        color="inherit"
        startIcon={<ShortcutOutlined />}
      >
        Переслать
      </Button>
    </S.Container>
  );
};
