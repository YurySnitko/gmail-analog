import { styled } from '@mui/material/styles';
import { Checkbox, Grid } from '@mui/material';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';

export const S = {
  MailListHeaderIconsWrapper: styled(Grid)`
    display: flex;
    align-items: center;
    color: ${({ theme }): string => theme.palette.text.headerIconButton};
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

  MoreIconMenuItemWrapper: styled(Grid)`
    border-top: 1px solid ${({ theme }): string => theme.palette.divider};
    width: 300px;
    padding: 0.5rem 3rem;
  `,

  MoreIconMenuItem: styled('div')`
    width: 160px;
    word-wrap: break-word;
    white-space: pre-wrap;
    font-style: italic;
    font-size: 0.875rem;
    color: ${({ theme }): string => theme.palette.text.menuMessage};
  `,
};
