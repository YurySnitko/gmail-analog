import { ShortcutOutlined } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  padding-top: 20px;
`;

export const SenderInfoTypography = styled(Typography)`
  line-height: 20px;
  vertical-align: top;
` as typeof Typography;

export const SenderInfoWrapperTypography = styled(Typography)`
  line-height: 20px;
` as typeof Typography;

export const SenderInfoGrid = styled(Grid)`
  max-height: 20px;
  overflow: hidden;
`;

export const DateGrid = styled(Grid)`
  max-height: 20px;
  position: relative;
`;

export const DateTypography = styled(Typography)`
  line-height: 20px;
  width: fit-content;
  padding-right: 124px;
` as typeof Typography;

export const AddresseeTypography = styled(Typography)`
  line-height: 20px;
` as typeof Typography;

export const Toolbar = styled('div')`
  position: absolute;
  right: 0;
  top: -8px;
  display: flex;
`;

export const ShortcutOutlinedLeft = styled(ShortcutOutlined)`
  transform: scale(-1, 1);
`;
