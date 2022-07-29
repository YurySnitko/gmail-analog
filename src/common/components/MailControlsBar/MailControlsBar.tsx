import { ShortcutOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FC } from 'react';
import { MailControlsBarProps } from './MailControlsBar.interfaces';
import * as S from './MailControlsBar.styles';

export const MailControlsBar: FC<MailControlsBarProps> = ({
  toggleAnswerContainerMode,
  toggleAnswerMode,
}) => {
  const onReplyButtonClick = (): void => {
    toggleAnswerContainerMode(true);
    toggleAnswerMode('reply');
  };

  const onForwardButtonClick = (): void => {
    toggleAnswerContainerMode(true);
    toggleAnswerMode('forward');
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
