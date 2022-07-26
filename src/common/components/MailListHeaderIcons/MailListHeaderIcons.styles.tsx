import { styled } from '@mui/material/styles';
import { Checkbox, Grid, Menu, MenuItem } from '@mui/material';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';

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

  MoreIconMenuItemWrapper: styled(Grid)`
    border-top: 1px solid ${({ theme }): string => theme.palette.divider};
    width: 300px;
    height: 110px;
    padding: 0.5rem 3rem;
  `,

  MoreIconMenuItem: styled('div')`
    width: 160px;
    word-wrap: break-word;
    white-space: pre-wrap;
    font-style: italic;
    font-size: 0.875rem;
  `,
};
