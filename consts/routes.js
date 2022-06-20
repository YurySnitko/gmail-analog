import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import EmailIcon from "@mui/icons-material/Email";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";

export const defaultLinkItems = [
  {
    title: 'Входящие',
    Image: InboxIcon,
  },
  {
    title: 'Помеченный',
    Image: StarBorderIcon
  },
  {
    title: 'Отложенные',
    Image: QueryBuilderIcon
  },
  {
    title: 'Отправленные',
    Image: SendIcon
  },
  {
    title: 'Черновики',
    Image: InsertDriveFileIcon
  },
]

export const moreLinksItems = [
  {
    title: 'Важные',
    Image: LabelImportantIcon,
  },
  {
    title: 'Запланированные',
    Image: ScheduleSendIcon,
  },
  {
    title: 'Вся почта',
    Image: EmailIcon,
  },
  {
    title: 'Спам',
    Image: ReportGmailerrorredIcon,
  },
  {
    title: 'Корзина',
    Image: DeleteIcon,
  },
  {
    title: 'Управление ярлыками',
    Image: SettingsIcon,
  },
]