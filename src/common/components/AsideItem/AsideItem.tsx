import React, { FC } from "react";
import { S } from "./AsideItem.styles";
import { AsideItemProps } from "./AsideItem.interface";
import Link from "next/link";

const AsideItem: FC<AsideItemProps> = ({
  isOpen,
  Icon,
  title,
  href,
  clickHandler,
}) => {
  return (
    <S.Item>
      <S.ListButton onClick={clickHandler}>
        <S.ItemButtonIcon>
          <Icon fontSize={"small"} />
        </S.ItemButtonIcon>
        {isOpen && (
          <S.ItemTitle>
            {href ? <Link href={href}>{title}</Link> : title}
          </S.ItemTitle>
        )}
      </S.ListButton>
    </S.Item>
  );
};

export default AsideItem;
