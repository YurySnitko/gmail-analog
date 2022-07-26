import * as S from './SearchBar.styles';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { FC, useState } from 'react';
import { SearchBarForm } from '../SearchBarForm/SearchBarForm';
import { Tooltip } from '@mui/material';
import HeaderFilter from '../HeaderFilter/HeaderFilter';

export const SearchBar: FC = () => {
  const [isFilterFormOpen, setIsFilterFormOpen] = useState(false);

  const setIsFilterFormOpenHandler = (flag: boolean): void => {
    setIsFilterFormOpen(flag);
  };

  const filterButtonClickHandler = (): void => {
    setIsFilterFormOpen((prev) => !prev);
  };

  return (
    <S.Container>
      <S.SearchButton>
        <SearchIcon />
      </S.SearchButton>
      <S.FormContainer>
        <SearchBarForm />
      </S.FormContainer>
      {!isFilterFormOpen && (
        <Tooltip
          onClick={filterButtonClickHandler}
          title={'Показать параметры поиска'}
        >
          <S.SearchParamsButton>
            <TuneIcon />
          </S.SearchParamsButton>
        </Tooltip>
      )}
      {isFilterFormOpen && (
        <HeaderFilter setIsFilterForm={setIsFilterFormOpenHandler} />
      )}
    </S.Container>
  );
};
