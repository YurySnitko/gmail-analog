import * as S from "./Header.styles";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import GoogleIcon from "@mui/icons-material/Google";
import { Typography } from "@mui/material";
import { FC } from "react";
import { IconButton } from "../../ui-kit/IconButton/IconButton";
import { SearchBar } from "../SearchBar/SearchBar";
import { HeaderProps } from "./Header.interfaces";

export const Header: FC<HeaderProps> = ({ onHideButtonClick }) => {
  return (
    <S.Header>
      <S.LeftSide>
        <IconButton size="large" onClick={onHideButtonClick}>
          <DehazeIcon />
        </IconButton>
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
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </S.Toolbar>
      </S.Center>
      <S.RightSide>
        <IconButton>
          <S.Avatar>Y</S.Avatar>
        </IconButton>
      </S.RightSide>
    </S.Header>
  );
};
