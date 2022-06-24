import { FC } from "react";
import * as S from "./SearchBar.styles";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

export const SearchBar: FC = () => {
  return (
    <S.Container>
      <S.SearchButton>
        <SearchIcon />
      </S.SearchButton>
      <S.Form>
        <S.InputBox>
          <S.Input placeholder="Search" />
        </S.InputBox>
      </S.Form>
      <S.SearchParamsButton>
        <TuneIcon />
      </S.SearchParamsButton>
    </S.Container>
  );
};
