import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AsideStylesProps } from "./Aside.interface";

export const S = {
  Aside: styled(({ isOpen, ...props }: AsideStylesProps) => (
    <Grid {...props} />
  ))`
    width: ${(props): string => (props.isOpen ? "256px" : "72px")};
    display: flex;
    flex-shrink: 0;
    padding-top: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    box-shadow: 1px 0 0 ${props => props.theme.palette.divider};
  `,
};
