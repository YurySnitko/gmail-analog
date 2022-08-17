import { Avatar as MuiAvatar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Header = styled('header')(({ theme }) => ({
  backgroundColor: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '64px',
  padding: '8px',
  borderBottom: `1px solid ${theme.palette.divider}`,
  fontFamily: "'Mulish', sans-serif",
}));

export const LeftSide = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flex: '1 0 auto',
  height: '48px',
  minWidth: '238px',
  paddingRight: '30px',
  color: `${theme.palette.text.headerIconButton}`,
}));

export const RightSide = styled('div')`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  height: 48px;
`;

export const Center = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flex: '1 1 100%',
  height: '48px',
  color: `${theme.palette.text.headerIconButton}`,
}));

export const SearchBarWrapper = styled('div')`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  height: 48px;
  width: 100%;
  padding-right: 30px;
  padding-left: 10px;
`;

export const Toolbar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  color: `${theme.palette.text.headerIconButton}`,
}));

export const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: '32px',
  height: '32px',
  fontSize: '16px',
  backgroundColor: theme.palette.primary.main,
}));

export const Title = styled('div')`
  display: flex;
  align-items: flex-end;
  user-select: none;
  cursor: pointer;
`;
