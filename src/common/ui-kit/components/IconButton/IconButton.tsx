import { IconButtonProps } from "@mui/material";
import {FC, forwardRef} from "react";
import * as S from "./IconButton.styles";

export const IconButton: FC<IconButtonProps> = forwardRef(({ children, ...props }, ref) => {
  return <S.IconButton {...props} ref={ref}>{children}</S.IconButton>;
});

IconButton.displayName = 'IconButton'
