import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';
import { PopperMenu } from '../../ui-kit/components/PopperMenu/PopperMenu';
import { FormatSizeTypographyProps } from './FormatSizeButton.interfaces';

export const FormatSizeTypography = styled(
  Typography
)<FormatSizeTypographyProps>(({ fontSize }) => ({
  fontSize: fontSize,
}));

export const IconButtonStld = styled(IconButton)(({ theme }) => ({
  color: theme.palette.grey[800],

  '&:hover': {
    color: theme.palette.grey[900],
  },
}));

export const Popper = styled(PopperMenu)`
  z-index: 1;
`;
