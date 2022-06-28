import * as S from './SearchBar.styles';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { FC } from 'react';
import { SearchBarForm } from '../SearchBarForm/SearchBarForm';

export const SearchBar: FC = () => {
  return (
    <S.Container>
      <S.SearchButton>
        <SearchIcon />
      </S.SearchButton>
      <S.FormContainer>
        <SearchBarForm />
      </S.FormContainer>
      <S.SearchParamsButton>
        <TuneIcon />
      </S.SearchParamsButton>
    </S.Container>
  );
};
