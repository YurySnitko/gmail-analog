import * as S from './Header.styles';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SettingsOutlinedIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GoogleIcon from '@mui/icons-material/Google';
import {
  MenuItem,
  SelectChangeEvent,
  Tooltip,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';
import { SearchBar } from '../SearchBar/SearchBar';
import { HeaderProps } from './Header.interfaces';
import LocalizationSelect from '../../ui-kit/components/LocalizationSelect/LocalizationSelect';
import { useRouter } from 'next/router';

export const Header: FC<HeaderProps> = ({
  onHideButtonClick,
  setIsSettingsOpenHandler,
}) => {
  const router = useRouter();
  const [localization, setLocalization] = useState<string>(
    router.locale ? router.locale : 'ru'
  );

  const localizationChangeHandler = (
    event: SelectChangeEvent<unknown>
  ): void => {
    router.push(`${router.route}`, `${router.route}`, {
      locale: event.target.value as string,
    });
    setLocalization(event.target.value as string);
  };

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
          <LocalizationSelect
            onChange={localizationChangeHandler}
            value={localization}
          >
            <MenuItem value={'ru'}>ru</MenuItem>
            <MenuItem value={'en-US'}>en</MenuItem>
          </LocalizationSelect>
          <Tooltip title="Поддержка">
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={'Настройки'}>
            <IconButton onClick={setIsSettingsOpenHandler}>
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
