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
    width: 20px;
    height: 30px;
    border-radius: 4px;
  `,

  IconsWrapper: styled(Grid)`
    display: flex;
  `,

  MoreIconsWrapper: styled(Grid)`
    &:last-child {
      border-right: none;
    }
    display: flex;
    padding: 0 0.5rem;
    gap: 0.5rem;
    border-right: 1px solid ${(props): string => props.theme.palette.divider};
  `,
};
