import React, { FC, useState } from "react";
import { S } from "./MailListItem.styles";
import { Checkbox, Tooltip } from "@mui/material";
import { IconButton }  from '../IconButton/IconButton'
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { MailListItemProps } from "./MailListItem.interface";

const MailListItem: FC<MailListItemProps> = ({
  sender,
  title,
  text,
  isViewed,
  date,
}) => {
  const [isHover, setIsHover] = useState(false);

  const listItemMouseEnderHandler = () => {
    setIsHover(true);
  };

  const listItemMouseLeaveHandler = () => {
    setIsHover(false);
  };

  const lineEndItems = () => {
    if (isHover) {
      return (
        <S.EndLineWrapper>
          <Tooltip title={"Архивировать"}>
            <IconButton>
              <ArchiveOutlinedIcon fontSize={"small"} />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Удалить"}>
            <IconButton>
              <DeleteOutlinedIcon fontSize={"small"} />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Отметить как прочитанное"}>
            <IconButton>
              <AccessTimeOutlinedIcon fontSize={"small"} />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Отложить"}>
            <IconButton>
              <EmailOutlinedIcon fontSize={"small"} />
            </IconButton>
          </Tooltip>
        </S.EndLineWrapper>
      );
    }
    return (
      <S.EndLineWrapper>
        <S.TimeText>{date}</S.TimeText>
      </S.EndLineWrapper>
    );
  };

  return (
    <S.MailListItemGrid
      isViewed={isViewed}
      onMouseEnter={listItemMouseEnderHandler}
      onMouseLeave={listItemMouseLeaveHandler}
    >
      {isHover && <S.DragIcon fontSize={"small"} />}
      <Checkbox size={"small"} />
      <Checkbox
        icon={<StarBorderIcon fontSize={"small"} />}
        checkedIcon={<S.CheckedStarIcon fontSize={"small"} />}
      />
      <S.TextWrapper>
        <S.MessageText isViewed={isViewed}>{sender}</S.MessageText>
        <S.TextContentWrapper>
          <S.MessageText>
            {isViewed ? title : <b>{title}</b>} - {text}
          </S.MessageText>
        </S.TextContentWrapper>
      </S.TextWrapper>
      {lineEndItems()}
    </S.MailListItemGrid>
  );
};

export default MailListItem;
