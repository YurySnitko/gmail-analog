import { Paper as MuiPaper, styled } from '@mui/material';

export const Paper = styled(MuiPaper)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
}));
