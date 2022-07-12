import { OpenInNewOutlined } from '@mui/icons-material';
import { Box, Tooltip, Typography } from '@mui/material';
import { FC } from 'react';
import { AddresseTag } from '../../ui-kit/AddresseeTag/AddresseeTag';
import { ToWhomToAnswerOptions } from '../../ui-kit/ToWhomToAnswerOptions/ToWhomToAnswerOptions';
import { ChooseAddresseeProps } from './ChooseAddressee.interfaces';
import * as S from './ChooseAddressee.styles';

export const ChooseAddressee: FC<ChooseAddresseeProps> = ({
  isEditMode,
  onClick,
}) => {
  return (
    <S.Container>
      <ToWhomToAnswerOptions />
      <S.AddressersWrapper onClick={onClick}>
        {!isEditMode ? (
          <Typography variant="body2" noWrap>
            Confluence confluence@innowise-group.atlassian.net
          </Typography>
        ) : (
          <Box sx={{ display: 'flex', gap: '5px' }}>
            <Tooltip title="Выбрать контакты">
              <Typography variant="body2">Кому</Typography>
            </Tooltip>
            <AddresseTag>Notification Innowise</AddresseTag>
            <S.Input fullWidth autoFocus disableUnderline />
          </Box>
        )}
        <Tooltip title="Развернуть ответ">
          <S.OpenInNewButton>
            <OpenInNewOutlined fontSize="inherit" />
          </S.OpenInNewButton>
        </Tooltip>
      </S.AddressersWrapper>
    </S.Container>
  );
};
