import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import {
  MailListItemGridProps,
  MessageTextProps,
} from "./MailListItem.interface";

export const S = {
  MailListItemGrid: styled(({ isViewed, ...props }: MailListItemGridProps) => (
    <Grid {...props} />
  ))`
    display: grid;
    grid-template-columns: 35px 35px 10fr 2.5fr;
    width: 100%;
    align-items: center;
    border-top: 1px solid lightgray;
    border-left: 1px solid white;
    border-right: 1px solid white;
    cursor: pointer;
    padding: 0 0.5rem;
    user-select: none;
    position: relative;
    background-color: ${(props) => (props.isViewed ? "#f4f7f7" : "#ffffff")};

    &:first-of-type {
      border-top: none;
    }

    &:hover {
      box-shadow: 1px 1px 2px 1px #9d9d9d;
      border-left: 1px solid lightgray;
      border-right: 1px solid lightgray;
    }

    &:last-child {
      border-bottom: 1px solid lightgray;
    }
  `,

  CheckedStarIcon: styled(StarRateIcon)`
    color: #f4b400;
  `,

  TextWrapper: styled.div`
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
    font-weight: ${(props) =>
      props.isViewed === undefined ? "400" : props.isViewed ? "400" : "700"};
  `,

  TimeText: styled(Typography)`
    font-size: 0.875rem;
    white-space: nowrap;
  `,

  DragIcon: styled(DragIndicatorIcon)`
    position: absolute;
    left: 2px;
    color: lightgray;
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
