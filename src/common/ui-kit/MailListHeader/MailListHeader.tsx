import React, { FC } from 'react';
import { S } from './MailListHeader.styles';
import PaginationPanel from '../../components/PaginationPanel/PaginationPanel';
import MailListHeaderIcons from '../../components/MailListHeaderIcons/MailListHeaderIcons';
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
