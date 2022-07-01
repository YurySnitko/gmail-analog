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
    grid-template-columns: 35px 35px 10fr 2.5fr;
    width: 100%;
    align-items: center;
    border-top: 1px solid ${({ theme }): string => theme.palette.divider};
    border-left: 1px solid ${({ theme }): string => theme.palette.common.white};
    border-right: 1px solid ${({ theme }): string => theme.palette.common.white};
    cursor: pointer;
    padding: 0 0.5rem;
    user-select: none;
    position: relative;
    background-color: ${({ theme, isViewed }): string =>
      isViewed
        ? theme.palette.background.mailListItemViewed
        : theme.palette.common.white};

    &:first-of-type {
      border-top: none;
    }

    &:hover {
      box-shadow: ${({ theme }): string =>
        theme.customShadows.mailListItemHover};
      border-left: 1px solid ${({ theme }): string => theme.palette.divider};
      border-right: 1px solid ${({ theme }): string => theme.palette.divider};
    }

    &:last-child {
      border-bottom: 1px solid ${({ theme }): string => theme.palette.divider};
    }
  `,

  CheckedStarIcon: styled(StarRateIcon)`
    color: ${({ theme }): string => theme.palette.background.starButtonFocused};
  `,

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
    font-weight: ${({ isViewed }): string =>
      isViewed === undefined ? '400' : isViewed ? '400' : '700'};
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
