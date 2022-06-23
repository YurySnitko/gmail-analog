import React, {FC} from 'react';
import {ButtonProps} from "./WriteButton.interface";
import { S } from './WriteButton.styles'

const WriteButton: FC<ButtonProps> = ({isOpen}) => {
  return (
    <S.Button>
      <S.WriteButtonWrapper isOpen={isOpen}>
        <S.EditIcon />
        { isOpen && <S.WriteButtonText>Написать</S.WriteButtonText>}
      </S.WriteButtonWrapper>
    </S.Button>
  );
};

export default WriteButton;