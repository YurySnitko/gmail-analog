import React, { FC } from 'react';
import { S } from './MailListHeader.styles';
import { Checkbox } from '@mui/material';

const MailListHeader: FC = () => {
  return (
    <S.MailListHeaderWrapper>
      <Checkbox size={'small'} />
    </S.MailListHeaderWrapper>
  );
};

export default MailListHeader;
