import { styled, Typography } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
  padding: '20px 0 8px 72px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: `${theme.palette.text.mailTitle}`,
}));

export const TitleWithTagsWrapper = styled('div')`
  line-height: 28px;
  display: flex;
  align-items: center;
`;

export const TitleTypography = styled(Typography)`
  display: inline-block;
  padding-right: 10px;
  word-break: break-word;
`;

export const Toolbar = styled('div')`
  display: flex;
`;
