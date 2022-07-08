import * as S from './Header.styles';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GoogleIcon from '@mui/icons-material/Google';
import { Tooltip, Typography } from '@mui/material';
import { FC } from 'react';
import { IconButton } from '../../ui-kit/IconButton/IconButton';
import { SearchBar } from '../SearchBar/SearchBar';
import { HeaderProps } from './Header.interfaces';

export const Header: FC<HeaderProps> = ({ onHideButtonClick }) => {
  return (
    <S.Header>
      <S.LeftSide>
        <Tooltip title="Главное меню">
          <IconButton size="large" onClick={onHideButtonClick}>
            <DehazeIcon />
          </IconButton>
        </Tooltip>
        <S.Title>
          <GoogleIcon fontSize="large" color="error" />
          <Typography variant="h5">mail</Typography>
        </S.Title>
      </S.LeftSide>
      <S.Center>
        <S.SearchBarWrapper>
          <SearchBar />
        </S.SearchBarWrapper>
        <S.Toolbar>
          <Tooltip title="Поддержка">
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Настройки">
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
          </Tooltip>
        </S.Toolbar>
      </S.Center>
      <S.RightSide>
        <Tooltip title="Аккаунт Google">
          <IconButton>
            <S.Avatar>Y</S.Avatar>
          </IconButton>
        </Tooltip>
      </S.RightSide>
    </S.Header>
  );
};
