import { OpenInNewOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { AddresseTag } from '../../ui-kit/AddresseeTag/AddresseeTag';
import { Tooltip } from '../../ui-kit/Tooltip/Tooltip';
import { ToWhomToAnswerOptions } from '../../ui-kit/ToWhomToAnswerOptions/ToWhomToAnswerOptions';
import { ChooseAddresseeProps } from './ChooseAddressee.interfaces';
import * as S from './ChooseAddressee.styles';

export const ChooseAddressee: FC<ChooseAddresseeProps> = ({
  isEditMode,
  answerMode,
  toogleChooseAddresseeEditMode,
  toogleAnswerMode,
}) => {
  const onAddressersWrapperClick = (): void => {
    toogleChooseAddresseeEditMode(true);
  };

  return (
    <S.Container>
      <ToWhomToAnswerOptions
        answerMode={answerMode}
        toogleAnswerMode={toogleAnswerMode}
      />
      <S.AddressersWrapper onClick={onAddressersWrapperClick}>
        {!isEditMode ? (
          <Typography variant="body2" noWrap>
            Confluence confluence@innowise-group.atlassian.net
          </Typography>
        ) : (
          <Box sx={{ display: 'flex', gap: '5px' }}>
            <Tooltip title="Выбрать контакты">
              <S.ToWhomTypography variant="body2">Кому</S.ToWhomTypography>
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
