import { styled } from '@mui/material/styles';
import { Checkbox, Grid } from '@mui/material';
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
    width: 25px;
    height: 30px;
    border-radius: 4px;
  `,
};
