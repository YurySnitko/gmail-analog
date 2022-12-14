import * as S from './Header.styles';
import DehazeIcon from '@mui/icons-material/Dehaze';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GoogleIcon from '@mui/icons-material/Google';
import {
  FormControlLabel,
  MenuItem,
  SelectChangeEvent,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material';
import { FC, useContext, useState } from 'react';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';
import { SearchBar } from '../SearchBar/SearchBar';
import { HeaderProps } from './Header.interfaces';
import { SettingsOutlined } from '@mui/icons-material';
import LocalizationSelect from '../../ui-kit/components/LocalizationSelect/LocalizationSelect';
import { useRouter } from 'next/router';
import { LocalizationContext } from '../../ui-kit/LocalizationProvider/LocalizationProvider';
import { useAppSelector } from '../../../hooks/redux.hook';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../../store/reducers/ThemeSlice';

export const Header: FC<HeaderProps> = ({
  onHideButtonClick,
  setIsSettingsOpenHandler,
}) => {
  const { theme } = useAppSelector((state) => state.theme);
  const router = useRouter();
  const t = useContext(LocalizationContext);
  const [themeState, setThemeState] = useState<boolean>(theme === 'dark');
  const [localization, setLocalization] = useState<string>(
    router.locale ? router.locale : 'ru'
  );
  const dispatch = useDispatch();

  const localizationChangeHandler = (
    event: SelectChangeEvent<unknown>
  ): void => {
    router.push(`${router.route}`, `${router.route}`, {
      locale: event.target.value as string,
    });
    setLocalization(event.target.value as string);
  };

  const themeChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(changeTheme(event.target.checked ? 'dark' : 'light'));
    setThemeState((state) => !state);
  };

  return (
    <S.Header>
      <S.LeftSide>
        <Tooltip title={t.headerMainMenuTooltip}>
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
          <FormControlLabel
            control={
              <Switch onChange={themeChangeHandler} checked={themeState} />
            }
            label={<Typography variant={'h6'}>{t.darkMode}</Typography>}
          />
          <LocalizationSelect
            onChange={localizationChangeHandler}
            value={localization}
          >
            <MenuItem value={'ru'}>ru</MenuItem>
            <MenuItem value={'en-US'}>en</MenuItem>
          </LocalizationSelect>
          <Tooltip title={t.headerSupportTooltip}>
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={t.headerSettingsTooltip}>
            <IconButton onClick={setIsSettingsOpenHandler}>
              <SettingsOutlined />
            </IconButton>
          </Tooltip>
        </S.Toolbar>
      </S.Center>
      <S.RightSide>
        <Tooltip title="?????????????? Google">
          <IconButton>
            <S.Avatar>Y</S.Avatar>
          </IconButton>
        </Tooltip>
      </S.RightSide>
    </S.Header>
  );
};
