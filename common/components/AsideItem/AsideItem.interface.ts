import {OverridableComponent} from "@mui/types";
import {SvgIconTypeMap} from "@mui/material";

export interface AsideItemProps {
  Image:  OverridableComponent<SvgIconTypeMap<{}, "svg">>,
  title: string,
  clickHandler?: () => void
}