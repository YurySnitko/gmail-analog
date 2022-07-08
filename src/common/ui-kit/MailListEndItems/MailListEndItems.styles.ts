import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const EndLineWrapper = styled(Grid)`
  justify-self: end;
  display: flex;
  align-items: center;
`;

export const TimeText = styled(Typography)`
  font-size: 0.875rem;
  white-space: nowrap;
`;
