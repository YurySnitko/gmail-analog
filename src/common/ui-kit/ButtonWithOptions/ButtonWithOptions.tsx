import { ArrowDropDown } from '@mui/icons-material';
import { Divider, Tooltip, Typography } from '@mui/material';
import { FC } from 'react';
import * as S from './ButtonWithOptions.styles';

export const ButtonWithOptions: FC = () => {
  return (
    <S.Wrapper>
      <Tooltip title="Отправить">
        <S.MainButton>
          <Typography variant="button">Отправить</Typography>
        </S.MainButton>
      </Tooltip>
      <Divider flexItem orientation="vertical" />
      <Tooltip title="Другие параметры отправки">
        <S.OptionsButton>
          <ArrowDropDown fontSize="small" color="inherit" />
        </S.OptionsButton>
      </Tooltip>
    </S.Wrapper>
  );
};
