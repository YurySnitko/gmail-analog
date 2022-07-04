import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  marginRight: '6px',
  height: '18px',
  letterSpacing: '.3px',
  transitionDuration: '.15s',
  transitionTimingFunction: `${theme.transitions.easing.easeInOut}`,
  transitionProperty: 'background, color',
}));

export const TitleTypography = styled(Typography)`
  background-color: rgb(221, 221, 221);
  color: rgb(102, 102, 102);
  border-radius: 4px 0 0 4px;
  padding: 0 2px 0 4px;
  line-height: 18px;
  letter-spacing: 0.3px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: rgb(102, 102, 102);
    color: rgb(221, 221, 221);
  }
` as typeof Typography;

export const Delete = styled(TitleTypography)`
  padding: 0 4px 0 2.5px;
  border-radius: 0 4px 4px 0;
  font-size: 15px;
` as typeof Typography;
