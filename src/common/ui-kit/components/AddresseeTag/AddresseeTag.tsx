import { FC } from 'react';
import { AddresseeTagProps } from './AddresseeTag.interfaces';
import * as S from './AddresseeTag.styles';

export const AddresseTag: FC<AddresseeTagProps> = ({ children }) => {
  return (
    <S.Container>
      <S.Text noWrap variant="body3">
        {children}
      </S.Text>
      <S.ClearIcon />
    </S.Container>
  );
};
