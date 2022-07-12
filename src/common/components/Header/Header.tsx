import * as S from "./Header.styles";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import GoogleIcon from "@mui/icons-material/Google";
import { Tooltip, Typography } from "@mui/material";
import { FC } from "react";
import { IconButton } from "../../ui-kit/components/IconButton/IconButton";
import { SearchBar } from "../SearchBar/SearchBar";
import { HeaderProps } from "./Header.interfaces";

export const Header: FC<HeaderProps> = ({
  onHideButtonClick,
  setIsSettingsOpenHandler,
}) => {
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
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton onClick={setIsSettingsOpenHandler}>
            <SettingsIcon />
          </IconButton>
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
