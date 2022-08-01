import React, { FC } from 'react';
import { S } from './MailListHeader.styles';
import PaginationPanel from '../PaginationPanel/PaginationPanel';
import MailListHeaderIcons from '../MailListHeaderIcons/MailListHeaderIcons';
import { MailListHeaderProps } from './MailListHeader.interfaces';

const MailListHeader: FC<MailListHeaderProps> = ({
  selectedMailsIds,
  setSelectedMailsIds,
}) => {
  return (
    <S.MailListHeaderWrapper>
      <MailListHeaderIcons
        setSelectedMailsIds={setSelectedMailsIds}
        selectedMailsIds={selectedMailsIds}
      />
      <PaginationPanel />
    </S.MailListHeaderWrapper>
  );
};

export default MailListHeader;
