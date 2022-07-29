import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;
`;

export const Container = styled('div')`
  height: calc(100% - 64px);
  display: flex;
  flex: 1 1 auto;
`;

export const Main = styled('main')`
  height: 100%;
  flex: 1 1 auto;
`;
