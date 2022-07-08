import { ShortcutOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  padding: '16px 0 16px 72px',
  display: 'flex',
  gap: '12px',
  color: `${theme.palette.text.headerIconButton}`,
}));

export const ShortcutOutlinedLeft = styled(ShortcutOutlined)`
  transform: scale(-1, 1);
`;