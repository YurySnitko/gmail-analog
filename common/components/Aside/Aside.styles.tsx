import {Grid} from "@mui/material";
import styled from "@emotion/styled";
import {AsideStylesProps} from "./Aside.interface";

export const S = {
  Aside: styled(({isOpen, ...props}: AsideStylesProps) => <Grid {...props}/>)`
    width: ${props => props.isOpen ? '256px' : '72px'};
    display: flex;
    padding-top: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    box-shadow: 0 0 4px lightgray;
  `,
}