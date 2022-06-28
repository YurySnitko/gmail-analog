import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import {
  MailListItemGridProps,
  MessageTextProps,
} from './MailListItem.interface';

export const S = {
  MailListItemGrid: styled(({ isViewed, ...props }: MailListItemGridProps) => (
    <Grid {...props} />
  ))`
    display: grid;
    grid-template-columns: 38px 35px 10fr 2.5fr;
    width: 100%;
    align-items: center;
    border-top: 1px solid ${(props): string => props.theme.palette.divider};
    border-left: 1px solid
      ${(props): string => props.theme.palette.common.white};
    border-right: 1px solid
      ${(props): string => props.theme.palette.common.white};
    cursor: pointer;
    padding: 0 0.5rem;
    user-select: none;
    position: relative;
    background-color: ${(props): string =>
      props.isViewed
        ? props.theme.palette.background.mailListItemViewed
        : props.theme.palette.common.white};

    &:hover {
      box-shadow: ${(props): string =>
        props.theme.customShadows.mailListItemHover};
      border-left: 1px solid ${(props): string => props.theme.palette.divider};
      border-right: 1px solid ${(props): string => props.theme.palette.divider};
    }

    &:last-child {
      border-bottom: 1px solid ${(props): string => props.theme.palette.divider};
    }
  `,

  CheckedStarIcon: styled(StarRateIcon)(({ theme }) => ({
    color: theme.palette.background.starButtonFocused,
  })),

  TextWrapper: styled('div')`
    display: grid;
    grid-template-columns: 80px 1fr;
    overflow: hidden;
    gap: 2.5rem;
  `,

  MessageText: styled(({ isViewed, ...props }: MessageTextProps) => (
    <Typography {...props} />
  ))`
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: normal;
    text-overflow: ellipsis;
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
    color: ${(props): string => props.theme.palette.grey.A400};
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

  EndLineWrapper: styled(Grid)`
    justify-self: end;
    display: flex;
    align-items: center;
  `,
};
