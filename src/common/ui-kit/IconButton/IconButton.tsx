import { IconButtonProps } from "@mui/material";
import { FC } from "react";
import * as S from "./IconButton.styles";

export const IconButton: FC<IconButtonProps> = ({ children, ...props }) => {
  return <S.IconButton {...props}>{children}</S.IconButton>;
};
