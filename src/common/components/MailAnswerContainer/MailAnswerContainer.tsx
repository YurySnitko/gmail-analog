import { OpenInNewOutlined } from '@mui/icons-material';
import { Avatar, Box, Typography } from '@mui/material';
import { FC } from 'react';
import { IconButton } from '../../ui-kit/IconButton/IconButton';
import { ToWhomToAnswerOptions } from '../../ui-kit/ToWhomToAnswerOptions/ToWhomToAnswerOptions';
import * as S from './MailAnswerContainer.styles';

export const MailAnswerContainer: FC = () => {
  return (
    <S.MainContainer>
      <S.AvatarWrapper>
        <Avatar />
      </S.AvatarWrapper>
      <S.Container>
        <S.ChooseAddresseeContainer>
          <ToWhomToAnswerOptions />
          <Box
            sx={{
              pt: 1,
              pb: 1,
              display: 'flex',
              lineHeight: '20px',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              cursor: 'text',
              overflow: 'hidden',
            }}
          >
            <Typography variant="body2" noWrap>
              Confluence confluence@innowise-group.atlassian.net
            </Typography>
            <IconButton sx={{ width: '20px', height: '20px' }}>
              <OpenInNewOutlined sx={{ fontSize: '14px' }} />
            </IconButton>
          </Box>
        </S.ChooseAddresseeContainer>
      </S.Container>
    </S.MainContainer>
  );
};
