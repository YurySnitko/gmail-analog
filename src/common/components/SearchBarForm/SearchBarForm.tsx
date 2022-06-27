import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import * as S from './SearchBarForm.styles';
import ClearIcon from '@mui/icons-material/Clear';

export const SearchBarForm: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [showClearButton, setShowClearButton] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchValue.length > 0) {
      setShowClearButton(true);
    } else {
      setShowClearButton(false);
    }
  }, [searchValue]);

  const onSearchValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const onClearButtonClick = (): void => {
    setSearchValue('');
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
