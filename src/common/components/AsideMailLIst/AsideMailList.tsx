import React, { FC, useState } from 'react';
import AsideItem from '../AsideItem/AsideItem';
import { S } from './AsideMailList.styles';
import { Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { defaultLinkItems, moreLinksItems } from '../../../consts/routes';
import { AsideMailListProps } from './AsideMailList.interfaces';

const AsideMailList: FC<AsideMailListProps> = ({ isOpen }) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  const moreClickHandler = (): void => {
    setIsCollapseOpen((prev) => !prev);
  };

  return (
    <S.AsideList>
      {defaultLinkItems.map(({ title, Icon, href }) => (
        <AsideItem
          isOpen={isOpen}
          Icon={Icon}
          title={title}
          href={href}
          key={title}
        />
      ))}
      <AsideItem
        isOpen={isOpen}
        Icon={isCollapseOpen ? KeyboardArrowUpIcon : ExpandMoreIcon}
        title={isCollapseOpen ? 'Свернуть' : 'Ещё'}
        clickHandler={moreClickHandler}
      />
      <Collapse in={isCollapseOpen} timeout={'auto'} unmountOnExit>
        {moreLinksItems.map(({ Icon, title, href }) => (
          <AsideItem
            isOpen={isOpen}
            Icon={Icon}
            title={title}
            href={href}
            key={title}
          />
        ))}
      </Collapse>
    </S.AsideList>
  );
};

export default AsideMailList;
