import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
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
};
