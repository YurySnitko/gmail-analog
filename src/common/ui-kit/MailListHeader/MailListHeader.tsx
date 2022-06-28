import React, { FC } from 'react';
import { S } from './MailListHeader.styles';
import PaginationPanel from '../../components/PaginationPanel/PaginationPanel';
import MailListHeaderIcons from '../../components/MailListHeaderIcons/MailListHeaderIcons';

const MailListHeader: FC = () => {
  return (
    <S.MailListHeaderWrapper>
      <MailListHeaderIcons />
      <PaginationPanel />
    </S.MailListHeaderWrapper>
  );
};

export default MailListHeader;
