import React, { FC, useEffect, useRef, useState } from 'react';
import { S } from './FilterSelect.styles';
import { FilterSelectProps } from './FilterSelect.interfaces';

const FilterSelect: FC<FilterSelectProps> = ({
  value,
  children,
  changeHandler,
}) => {
  const selectComponent = useRef<HTMLInputElement>(null);
  const [position, setPosition] = useState<number>(0);

  useEffect((): void => {
    setPosition(
      selectComponent.current
        ? selectComponent.current.getBoundingClientRect().left + 20
        : 0
    );
  }, [selectComponent]);

  return (
    <S.FilterWrapper>
      <S.FilterSelect
        ref={selectComponent}
        onChange={changeHandler}
        MenuProps={{
          PaperProps: {
            sx: {
              minWidth: '150px !important',
              left: `${position}px !important`,
            },
          },
        }}
        variant={'standard'}
        value={value}
      >
        {children}
      </S.FilterSelect>
    </S.FilterWrapper>
  );
};

export default FilterSelect;
