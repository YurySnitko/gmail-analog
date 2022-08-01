import {
  Tooltip as MuiTooltip,
  tooltipClasses,
  TooltipProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip disableInteractive {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: '0.75rem',
    fontWeight: 600,
  },
});
