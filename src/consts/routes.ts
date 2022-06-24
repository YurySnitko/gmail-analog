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
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import { UrlObject } from "url";

interface LinkItem {
  title: string;
  Image: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  href: string | UrlObject;
}

export const defaultLinkItems: LinkItem[] = [
  {
    title: "Входящие",
    Image: InboxIcon,
    href: "/inbox",
  },
  {
    title: "Помеченные",
    Image: StarBorderIcon,
    href: "/starred",
  },
  {
    title: "Отложенные",
    Image: QueryBuilderIcon,
    href: "/snoozed",
  },
  {
    title: "Отправленные",
    Image: SendIcon,
    href: "/sent",
  },
  {
    title: "Черновики",
    Image: InsertDriveFileIcon,
    href: "/drafts",
  },
];

export const moreLinksItems: LinkItem[] = [
  {
    title: "Важные",
    Image: LabelImportantIcon,
    href: "/imp",
  },
  {
    title: "Запланированные",
    Image: ScheduleSendIcon,
    href: "/scheduled",
  },
  {
    title: "Вся почта",
    Image: EmailIcon,
    href: "/all",
  },
  {
    title: "Спам",
    Image: ReportGmailerrorredIcon,
    href: "/spam",
  },
  {
    title: "Корзина",
    Image: DeleteIcon,
    href: "/trash",
  },
  {
    title: "Управление ярлыками",
    Image: SettingsIcon,
    href: "/settings/labels",
  },
];
