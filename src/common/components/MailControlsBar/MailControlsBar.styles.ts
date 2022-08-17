import { ShortcutOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  paddingLeft: '72px',
  display: 'flex',
  gap: '12px',
  color: `${theme.palette.text.mailControls}`,
}));

export const ShortcutOutlinedLeft = styled(ShortcutOutlined)`
  transform: scale(-1, 1);
`;
