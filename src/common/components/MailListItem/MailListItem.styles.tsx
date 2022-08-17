import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import {
  MailListItemGridBackgroundEnum,
  MailListItemGridProps,
  MessageTextProps,
} from './MailListItem.interfaces';

export const S = {
  MailListItemGrid: styled(
    ({ background, ...props }: MailListItemGridProps) => <Grid {...props} />
  )`
    display: grid;
    grid-template-columns: 38px 35px 10fr 2.5fr;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid ${({ theme }): string => theme.palette.divider};
    cursor: pointer;
    padding: 0 0.5rem;
    user-select: none;
    position: relative;
    color: ${(props): string =>
      props.background === MailListItemGridBackgroundEnum.viewed
        ? props.theme.palette.text.mailListItemChecked
        : props.theme.palette.text.mailListItem};
    background-color: ${(props): string =>
      props.background === MailListItemGridBackgroundEnum.checked
        ? props.theme.palette.background.mailListItemChecked
        : props.background === MailListItemGridBackgroundEnum.viewed
        ? props.theme.palette.background.mailListItemViewed
        : props.theme.palette.background.mailListItemDefault};

    &:hover {
      box-shadow: ${(props): string =>
        props.theme.customShadows.mailListItemHover};
    }
  `,

  CheckedStarIcon: styled(StarRateIcon)(({ theme }) => ({
    color: theme.palette.background.starButtonFocused,
  })),

  TextWrapper: styled('div')`
    display: grid;
    grid-template-columns: 168px 1fr;
    overflow: hidden;
    gap: 32px;
  `,

  MessageText: styled(({ isViewed, ...props }: MessageTextProps) => (
    <Typography {...props} />
  ))`
    font-size: 0.875rem;
    letter-spacing: normal;
    font-weight: ${(props): string =>
      props.isViewed === undefined ? '400' : props.isViewed ? '400' : '700'};
  `,

  TimeText: styled(Typography)`
    font-size: 0.875rem;
    white-space: nowrap;
  `,

  DragIcon: styled(DragIndicatorIcon)`
    position: absolute;
    left: 2px;
    color: ${({ theme }): string => theme.palette.grey.A400};
  `,

  IconWrapper: styled(Grid)`
    display: flex;
  `,

  TextContentWrapper: styled(Grid)`
    display: flex;
    overflow: hidden;
    align-items: center;
    gap: 5px;
  `,
};
