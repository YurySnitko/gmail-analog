import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const S = {
  HeaderFilterWrapper: styled(Grid)`
    position: absolute;
    max-width: 720px;
    min-width: 334px;
    width: 100%;
    padding: 24px;
    background-color: ${({ theme }): string => theme.palette.common.white};
    z-index: 3;
    border: 1px solid
      ${({ theme }): string => theme.palette.background.headerFilterBorder};
    box-shadow: ${({ theme }): string => theme.customShadows.headerFilter};
  `,

  HeaderFilterForm: styled('form')`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
};
