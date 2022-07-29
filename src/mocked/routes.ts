import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import EmailIcon from '@mui/icons-material/Email';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { UrlObject } from 'url';

interface LinkItem {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>> & {
    muiName: string;
  };
  href: string | UrlObject;
}

export const defaultLinkItems: LinkItem[] = [
  {
    title: 'Входящие',
    Icon: InboxIcon,
    href: '/inbox',
  },
  {
    title: 'Помеченные',
    Icon: StarBorderIcon,
    href: '/starred',
  },
  {
    title: 'Отложенные',
    Icon: QueryBuilderIcon,
    href: '/snoozed',
  },
  {
    title: 'Отправленные',
    Icon: SendIcon,
    href: '/sent',
  },
  {
    title: 'Черновики',
    Icon: InsertDriveFileIcon,
    href: '/drafts',
  },
];

export const moreLinksItems: LinkItem[] = [
  {
    title: 'Важные',
    Icon: LabelImportantIcon,
    href: '/imp',
  },
  {
    title: 'Запланированные',
    Icon: ScheduleSendIcon,
    href: '/scheduled',
  },
  {
    title: 'Вся почта',
    Icon: EmailIcon,
    href: '/all',
  },
  {
    title: 'Спам',
    Icon: ReportGmailerrorredIcon,
    href: '/spam',
  },
  {
    title: 'Корзина',
    Icon: DeleteIcon,
    href: '/trash',
  },
  {
    title: 'Управление ярлыками',
    Icon: SettingsIcon,
    href: '/settings/labels',
  },
];
