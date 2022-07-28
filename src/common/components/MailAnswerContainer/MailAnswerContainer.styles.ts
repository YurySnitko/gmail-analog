import { Avatar as MuiAvatar, styled } from '@mui/material';

export const MainContainer = styled('div')`
  padding: 0 8px 0 16px;
  display: flex;
`;

export const AvatarWrapper = styled('div')`
  padding: 8px 0;
  margin-right: 8px;
`;

export const Avatar = styled(MuiAvatar)`
  position: sticky;
  top: 8px;
`;

export const Container = styled('div')`
  position: relative;
  width: 100%;
  border: 1px solid #dadce0;
  border-radius: 8px;
  transition: border 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-within {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 2px 6px 2px rgb(60 64 67 / 15%);
    border: 1px solid transparent;
  }
`;
