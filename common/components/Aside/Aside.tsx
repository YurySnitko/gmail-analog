import React from 'react';
import AsideMailList from "../AsideMailLIst/AsideMailList";
import {S} from './Aside.styles'
import LayoutButton from "../../ui-kit/LayoutButton/LayoutButton";

const Aside = () => {
  return (
    <S.Aside>
      <LayoutButton>
        <S.WriteButtonWrapper>
          <S.EditIcon />
          <S.WriteButtonText>Написать</S.WriteButtonText>
        </S.WriteButtonWrapper>
      </LayoutButton>
      <AsideMailList />
    </S.Aside>
  );
};

export default Aside;