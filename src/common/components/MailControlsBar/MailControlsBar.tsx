import { ShortcutOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FC } from 'react';
import { MailControlsBarProps } from './MailControlsBar.interfaces';
import * as S from './MailControlsBar.styles';

export const MailControlsBar: FC<MailControlsBarProps> = ({
  toogleAnswerMode,
}) => {
  return (
    <S.Container>
      <Button
        onClick={toogleAnswerMode}
        variant="outlined"
        color="inherit"
        startIcon={<S.ShortcutOutlinedLeft />}
      >
        Ответить
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        startIcon={<ShortcutOutlined />}
      >
        Переслать
      </Button>
    </S.Container>
  );
};
