import React, { FC, useContext } from 'react';
import { ButtonProps } from './WriteButton.interfaces';
import { S } from './WriteButton.styles';
import { LocalizationContext } from '../../LocalizationProvider/LocalizationProvider';

const WriteButton: FC<ButtonProps> = ({ isOpen }) => {
  const t = useContext(LocalizationContext);

  return (
    <S.Button>
      <S.WriteButtonWrapper isOpen={isOpen}>
        <S.EditIcon />
        {isOpen && <S.WriteButtonText>{t.write}</S.WriteButtonText>}
      </S.WriteButtonWrapper>
    </S.Button>
  );
};

export default WriteButton;
