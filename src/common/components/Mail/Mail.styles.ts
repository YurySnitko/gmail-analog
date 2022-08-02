import { styled } from '@mui/material/styles';

export const MainContainer = styled('div')`
  overflow-y: auto;
  //height: 602px;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%),
      inset 0px -1px 0px rgb(0 0 0 / 7%);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  &::-webkit-scrollbar-track:hover {
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%),
      inset 0px -1px 0px rgb(0 0 0 / 7%);
  }
`;

export const Container = styled('div')`
  display: flex;
`;

export const AvatarWrapper = styled('div')`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 16px;
`;

export const MailBodyWrapper = styled('div')`
  width: 100%;
  padding-bottom: 20px;
  margin: 0;
`;
