import React, {useState} from 'react';
import AsideItem from "../AsideItem/AsideItem";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import {S} from './AsideMailList.styles'
import {Collapse} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import EmailIcon from '@mui/icons-material/Email';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';

const items = [
  {
    id: 1,
    title: 'Входящие',
    Image: InboxIcon,
  },
  {
    id: 2,
    title: 'Помеченный',
    Image: StarBorderIcon
  },
  {
    id: 3,
    title: 'Отложенные',
    Image: QueryBuilderIcon
  },
  {
    id: 4,
    title: 'Отправленные',
    Image: SendIcon
  },
  {
    id: 5,
    title: 'Черновики',
    Image: InsertDriveFileIcon
  },


]

const moreItems = [
  {
    id: 1,
    title: 'Важные',
    Image: LabelImportantIcon,
  },
  {
    id: 2,
    title: 'Запланированные',
    Image: ScheduleSendIcon,
  },
  {
    id: 3,
    title: 'Вся почта',
    Image: EmailIcon,
  },
  {
    id: 4,
    title: 'Спам',
    Image: ReportGmailerrorredIcon,
  },
  {
    id: 5,
    title: 'Корзина',
    Image: DeleteIcon,
  },
  {
    id: 6,
    title: 'Управление ярлыками',
    Image: SettingsIcon,
  },
]

const AsideMailList = () => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false)

  const moreClickHandler = () => {
    setIsCollapseOpen((prev) => !prev)
  }

  return (
    <S.AsideList>
      {items.map((item) => (
        <AsideItem Image={item.Image} title={item.title} key={item.id} />
      ))}
      <AsideItem Image={isCollapseOpen ? KeyboardArrowUpIcon : ExpandMoreIcon} title={isCollapseOpen ? 'Свернуть' : 'Ещё'} clickHandler={moreClickHandler} />
      <Collapse in={isCollapseOpen} timeout={"auto"} unmountOnExit>
        {moreItems.map(({Image, title, id}) => (
          <AsideItem Image={Image} title={title} key={id} />
        ))}
      </Collapse>
    </S.AsideList>
  );
};

export default AsideMailList;