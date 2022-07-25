import { styled } from '@mui/material/styles';
import { Button, Grid, MenuItem, Typography } from '@mui/material';

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

  HeaderFilterSelectItem: styled('div')`
    display: grid;
    grid-template-columns: 1fr 4fr;
  `,

  HeaderFilterSelectItemText: styled(Typography)`
    display: flex;
    align-items: center;
    font-size: 0.875rem;
  `,

  HeaderFilterDatePickerWrapper: styled('div')`
    display: grid;
    grid-template-columns: 2fr 2.6fr;
    gap: 0.5rem;
    align-items: center;
  `,

  HeaderFilterSelectWrapper: styled('div')`
    display: grid;
    grid-template-columns: 2fr 1.5fr 1fr;
    gap: 0.5rem;
    align-items: center;
  `,

  CheckboxWrapper: styled('div')`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,

  CheckboxLabel: styled(Typography)`
    font-size: 0.875rem;
  `,

  FormControls: styled('div')`
    display: flex;
    justify-content: flex-end;
    gap: 5px;
  `,

  CreateFilterButton: styled(Button)`
    box-shadow: none;
    color: lightgray;

    &.Mui-disabled {
      border: none;
      box-shadow: none;
      color: lightgray;
    }
  `,

  FilterMenuItem: styled(MenuItem)`
    font-size: 0.875rem;
    width: 200px;
  `,

  FilterTopBorderMenuItem: styled(MenuItem)`
    font-size: 0.875rem;
    width: 200px;
    border-top: ${({ theme }): string =>
      theme.customShadows.headerFilterInputBorder};
  `,
};
