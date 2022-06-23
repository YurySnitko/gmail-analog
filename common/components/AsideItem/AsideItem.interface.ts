import { OverridableComponent } from "@mui/types";
import { SvgIconTypeMap } from "@mui/material";
import { UrlObject } from "url";

export interface AsideItemProps {
  Image: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  clickHandler?: () => void;
  isOpen?: boolean;
  href?: string | UrlObject;
}
