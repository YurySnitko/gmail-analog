import * as S from './SearchBar.styles';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { FC, useContext, useState } from 'react';
import { SearchBarForm } from '../SearchBarForm/SearchBarForm';
import { Tooltip } from '@mui/material';
import HeaderFilter from '../HeaderFilter/HeaderFilter';
import { LocalizationContext } from '../../ui-kit/LocalizationProvider/LocalizationProvider';

export const SearchBar: FC = () => {
  const [isFilterFormOpen, setIsFilterFormOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const t = useContext(LocalizationContext);

  const setIsFilterFormOpenHandler = (flag: boolean): void => {
    setIsFilterFormOpen(flag);
  };

  const filterButtonClickHandler = (): void => {
    setIsFilterFormOpen((prev) => !prev);
  };

  const setSearchValueHandler = (value: string): void => {
    setSearchValue(value);
  };

  return (
    <S.Container>
      <S.SearchButton>
        <SearchIcon />
      </S.SearchButton>
      <S.FormContainer>
        <SearchBarForm
          searchValue={searchValue}
          setSearchValueHandler={setSearchValueHandler}
        />
      </S.FormContainer>
      {!isFilterFormOpen && (
        <Tooltip
          onClick={filterButtonClickHandler}
          title={t.searchSettingsButtonTooltip}
        >
          <S.SearchParamsButton>
            <TuneIcon />
          </S.SearchParamsButton>
        </Tooltip>
      )}
      {isFilterFormOpen && (
        <HeaderFilter
          searchedValue={searchValue}
          setIsFilterForm={setIsFilterFormOpenHandler}
        />
      )}
    </S.Container>
  );
};
