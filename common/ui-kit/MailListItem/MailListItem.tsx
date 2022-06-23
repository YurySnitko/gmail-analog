import React, { useState } from "react";
import { S } from "./MailListItem.styles";
import { Checkbox, IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const data = {
  sender: "Atlassian",
  title: "Introducing Table Visualization",
  text: `Say hello to dynamic charts, Confluence's new integration`,
  date: "16 июн.",
  isViewed: false,
};

const MailListItem = () => {
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
        <S.IconWrapper>
          <IconButton>
            <ArchiveOutlinedIcon fontSize={"small"} />
          </IconButton>
          <IconButton>
            <DeleteOutlinedIcon fontSize={"small"} />
          </IconButton>
          <IconButton>
            <EmailOutlinedIcon fontSize={"small"} />
          </IconButton>
          <IconButton>
            <AccessTimeOutlinedIcon fontSize={"small"} />
          </IconButton>
        </S.IconWrapper>
      );
    }
    return <S.TimeText>{data.date}</S.TimeText>;
  };

  return (
    <S.MailListItemGrid
      isViewed={data.isViewed}
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
        <S.MessageText isViewed={data.isViewed}>{data.title}</S.MessageText>
        <S.MessageText>-</S.MessageText>
        <S.MessageText>{data.text}</S.MessageText>
      </S.TextWrapper>
      {lineEndItems()}
    </S.MailListItemGrid>
  );
};

export default MailListItem;
