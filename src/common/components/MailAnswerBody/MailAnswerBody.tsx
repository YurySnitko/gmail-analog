import { MoreHorizRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Tooltip } from '../../ui-kit/Tooltip/Tooltip';
import { MailAnswerBodyProps } from './MailAnswerBody.interfaces';
import * as S from './MailAnswerBody.styles';

export const MailAnswerBody: FC<MailAnswerBodyProps> = ({
  answerMode,
  toogleChooseAddresseeEditMode,
}) => {
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);

  const text =
    'Добрый день! Небольшое обновление по оформлению отсутствий - теперь отпуска нужно оформлять минимум за 4 дня, иначе запрос автоматически отклонится в HRM. По срочным отпускам продолжаем писать в сервис деск, после согласования вопроса с отделом кадров и ресурсным менеджером.';

  const openMessageText = (): void => {
    setIsMessageOpen(true);
  };

  const onContainerClick = (): void => {
    toogleChooseAddresseeEditMode(false);
  };

  return (
    <S.Container onClick={onContainerClick}>
      <S.Input disableUnderline fullWidth multiline autoFocus />
      {answerMode === 'reply' ? (
        !isMessageOpen ? (
          <Tooltip title="Показать скрытую часть" onClick={openMessageText}>
            <S.IconButtonStld shape="square">
              <MoreHorizRounded fontSize="small" />
            </S.IconButtonStld>
          </Tooltip>
        ) : (
          <Box sx={{ pb: 2 }}>
            <Typography variant="message">
              пн, 4 июл. 2022 г. в 17:56, Notification Innowise
              notification@innowise-group.com
            </Typography>
            <S.PrevMessage>{text}</S.PrevMessage>
          </Box>
        )
      ) : (
        <Box sx={{ pb: 2 }}>
          <Typography variant="message">
            -------- Forwarded message -------- <br />
            От: <b>Maksim Zaitsau </b>
            notifications-noreply@bitbucket.org <br />
            Date: пт, 22 июл. 2022 г. в 15:09 <br />
            Subject: [Bitbucket] Commits pushed (yurysnitko/gmail-analog-front){' '}
            <br />
            To: yury.snitko@innowise-group.com
            <br />
            <br />
          </Typography>
          <div>{text.repeat(3)}</div>
        </Box>
      )}
    </S.Container>
  );
};
