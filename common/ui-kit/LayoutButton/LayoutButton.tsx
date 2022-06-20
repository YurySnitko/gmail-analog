import React, {FC} from 'react';
import {ButtonProps} from "./LayoutButton.interface";
import { S } from './LayoutButton.styles'

const LayoutButton: FC<ButtonProps> = ({children}) => {
  return (
    <S.Button>
      {children}
    </S.Button>
  );
};

export default LayoutButton;