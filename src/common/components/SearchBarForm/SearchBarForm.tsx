import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import * as S from './SearchBarForm.styles';
import ClearIcon from '@mui/icons-material/Clear';
import { SearchBarFormProps } from './SearchBarForm.interfaces';

export const SearchBarForm: FC<SearchBarFormProps> = ({
  searchValue,
  setSearchValueHandler,
}) => {
  const [showClearButton, setShowClearButton] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setShowClearButton(searchValue.length > 0);
  }, [searchValue]);

  const onSearchValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValueHandler(e.target.value);
  };

  const onClearButtonClick = (): void => {
    setSearchValueHandler('');
    inputRef.current?.focus();
  };
  return (
    <>
      <form>
        <S.InputBox>
          <S.Input
            ref={inputRef}
            placeholder="Search"
            onChange={onSearchValueChange}
            value={searchValue}
          />
        </S.InputBox>
      </form>
      {showClearButton && (
        <S.ClearButton onClick={onClearButtonClick}>
          <ClearIcon />
        </S.ClearButton>
      )}
    </>
  );
};
