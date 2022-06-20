import React, {useState} from 'react';
import AsideItem from "../AsideItem/AsideItem";
import {S} from './AsideMailList.styles'
import {Collapse} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { defaultLinkItems, moreLinksItems }  from '../../../consts/routes';

const AsideMailList = () => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false)

  const moreClickHandler = () => {
    setIsCollapseOpen((prev) => !prev)
  }

  return (
    <S.AsideList>
      {defaultLinkItems.map(({title, Image}) => (
        <AsideItem Image={Image} title={title} key={title} />
      ))}
      <AsideItem Image={isCollapseOpen ? KeyboardArrowUpIcon : ExpandMoreIcon} title={isCollapseOpen ? 'Свернуть' : 'Ещё'} clickHandler={moreClickHandler} />
      <Collapse in={isCollapseOpen} timeout={"auto"} unmountOnExit>
        {moreLinksItems.map(({Image, title}) => (
          <AsideItem Image={Image} title={title} key={title} />
        ))}
      </Collapse>
    </S.AsideList>
  );
};

export default AsideMailList;