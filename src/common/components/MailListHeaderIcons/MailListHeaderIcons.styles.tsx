import { styled } from '@mui/material/styles';
import { Checkbox, Grid, Menu, MenuItem } from '@mui/material';
import { IconButton } from '../../ui-kit/IconButton/IconButton';

export const S = {
  MailListHeaderIconsWrapper: styled(Grid)`
    display: flex;
    align-items: center;
  `,

  CheckBoxWrapper: styled(Grid)`
    display: flex;
    align-items: center;
  `,

  CheckboxArrowButton: styled(IconButton)`
    height: 30px;
    width: 15px;
    border-radius: 4px;
  `,

  Checkbox: styled(Checkbox)`
    width: 20px;
    height: 30px;
    border-radius: 4px;
  `,

  Menu: styled(Menu)`
    border-radius: 4px;
  `,

  MenuItem: styled(MenuItem)`
    font-size: 0.875rem;
    padding: 0.5rem 3rem;
    line-height: 20px;
  `,
};
