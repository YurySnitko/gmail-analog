import React from 'react';
import AsideMailList from "../AsideMailLIst/AsideMailList";
import {S} from './Aside.styles'

const Aside = () => {
  return (
    <S.Aside>
      <AsideMailList />
    </S.Aside>
  );
};

export default Aside;