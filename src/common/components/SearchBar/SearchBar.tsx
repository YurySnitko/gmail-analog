import * as S from './SearchBar.styles';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { FC, useState } from 'react';
import { SearchBarForm } from '../SearchBarForm/SearchBarForm';
import HeaderFilter from '../HeaderFilter/HeaderFilter';
import { ClickAwayListener, Tooltip } from '@mui/material';

export const SearchBar: FC = () => {
  const [isFilterFormOpen, setIsFilterFormOpen] = useState(false);

  const filterButtonClickHandler = (): void => {
    setIsFilterFormOpen((prev) => !prev);
  };

  const clickAwayHandler = (): void => {
    setIsFilterFormOpen(false);
  };

  return (
    <S.Container>
      <S.SearchButton>
        <SearchIcon />
      </S.SearchButton>
      <S.FormContainer>
        <SearchBarForm />
      </S.FormContainer>
      <ClickAwayListener onClickAway={clickAwayHandler}>
        <div>
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
          {isFilterFormOpen ? <HeaderFilter /> : null}
        </div>
      </ClickAwayListener>
    </S.Container>
  );
};
