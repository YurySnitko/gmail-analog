import React, { FC, useState } from 'react';
import AsideItem from '../AsideItem/AsideItem';
import { S } from './AsideMailList.styles';
import { Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { defaultLinkItems, moreLinksItems } from '../../../mocked/routes';
import { AsideMailListProps } from './AsideMailList.interfaces';
import { ru } from '../../../locales/ru/translation';
import { enUS } from '../../../locales/en/translation';
import { useRouter } from 'next/router';

const AsideMailList: FC<AsideMailListProps> = ({ isOpen }) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
  const { locale } = useRouter();

  const t = locale === 'en-US' ? enUS : ru;

  const moreClickHandler = (): void => {
    setIsCollapseOpen((prev) => !prev);
  };

  return (
    <S.AsideList>
      {defaultLinkItems.map(({ title, Icon, href }) => (
        <AsideItem
          isOpen={isOpen}
          Icon={Icon}
          title={t[title]}
          href={href}
          key={title}
        />
      ))}
      <AsideItem
        isOpen={isOpen}
        Icon={isCollapseOpen ? KeyboardArrowUpIcon : ExpandMoreIcon}
        title={isCollapseOpen ? t.less : t.more}
        clickHandler={moreClickHandler}
      />
      <Collapse in={isCollapseOpen} timeout={'auto'} unmountOnExit>
        {moreLinksItems.map(({ Icon, title, href }) => (
          <AsideItem
            isOpen={isOpen}
            Icon={Icon}
            title={t[title]}
            href={href}
            key={title}
          />
        ))}
      </Collapse>
    </S.AsideList>
  );
};

export default AsideMailList;
