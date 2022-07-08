import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const S = {
  PaginationPanelWrapper: styled(Grid)`
    display: flex;
    align-items: center;
  `,

  PageButton: styled('button')`
    outline: none;
    color: ${(props): string => props.theme.palette.grey.A700};
    background-color: ${(props): string => props.theme.palette.common.white};
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.3s;
    height: 36px;

    &:hover {
      background-color: ${(props): string => props.theme.palette.grey.A200};
    }
  `,
};
