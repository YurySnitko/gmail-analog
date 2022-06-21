import React, {FC, useState} from 'react';
import AsideMailList from "../AsideMailLIst/AsideMailList";
import {S} from './Aside.styles'
import WriteButton from "../WriteButton/WriteButton";
import {AsideProps} from "./Aside.interface";
import {Button} from "@mui/material";

const Aside: FC<AsideProps> = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isHover, setIsHover] = useState(false)

  const hideButtonClickHandler = () => {
    setIsOpen((prevState) => !prevState)
  }

  const asideMouseEnderHandler = () => {
    if (!isOpen) {
      setIsHover(true)
    }
  }

  const asideLeaveEnderHandler = () => {
    if (!isOpen) {
      setIsHover(false)
    }
  }

  return (
    <>
      <Button
        variant={'contained'}
        onClick={hideButtonClickHandler}
      >
        Hide
      </Button>
      <S.Aside
        isOpen={isOpen || isHover}
        onMouseEnter={asideMouseEnderHandler}
        onMouseLeave={asideLeaveEnderHandler}
      >
        <WriteButton isOpen={isOpen || isHover} />
        <AsideMailList isOpen={isOpen || isHover} />
      </S.Aside>
    </>
  );
};

export default Aside;