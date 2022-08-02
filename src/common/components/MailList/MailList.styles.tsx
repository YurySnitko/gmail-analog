import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const S = {
  MailListGrid: styled(Grid)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${({ theme }): string => theme.palette.common.white};
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%),
        inset 0px -1px 0px rgb(0 0 0 / 7%);
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }

    &::-webkit-scrollbar-track:hover {
      background-color: rgba(0, 0, 0, 0.05);
      box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%),
        inset 0px -1px 0px rgb(0 0 0 / 7%);
    }
  `,
};
