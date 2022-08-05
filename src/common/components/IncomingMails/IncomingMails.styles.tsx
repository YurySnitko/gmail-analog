import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { ReflexSplitter } from 'react-reflex';

export const S = {
  LoaderWrapper: styled(Grid)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Splitter: styled(ReflexSplitter)`
    height: 4px;
  `,

  SecondPanelWrapper: styled('div')`
    display: flex;
    align-items: center;
    padding-top: 40px;
    justify-content: center;
  `,

  SecondPanelTitle: styled(Typography)`
    font-size: 1rem;
    user-select: none;
  `,
};
