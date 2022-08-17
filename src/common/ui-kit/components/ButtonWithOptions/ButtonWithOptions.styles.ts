import { styled, ButtonBase as MuiButtonBase } from '@mui/material';

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.background.sendMailControl,
  borderRadius: '4px',
  border: 'none',
  height: '36px',
  color: theme.palette.common.white,

  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    outline: '1px solid transparent',
    boxShadow:
      '0 1px 2px 0 rgb(26 115 232 / 45%), 0 1px 3px 1px rgb(26 115 232 / 30%)',
  },
}));

export const MainButton = styled(MuiButtonBase)`
  padding: 0 16px;
`;

export const OptionsButton = styled(MuiButtonBase)`
  width: 26px;
`;
