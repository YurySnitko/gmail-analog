import { MoreHorizRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Tooltip } from '../../ui-kit/Tooltip/Tooltip';
import { MailAnswerBodyProps } from './MailAnswerBody.interfaces';
import * as S from './MailAnswerBody.styles';

export const MailAnswerBody: FC<MailAnswerBodyProps> = ({ onClick }) => {
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);

  const text =
    'Добрый день! Небольшое обновление по оформлению отсутствий - теперь отпуска нужно оформлять минимум за 4 дня, иначе запрос автоматически отклонится в HRM. По срочным отпускам продолжаем писать в сервис деск, после согласования вопроса с отделом кадров и ресурсным менеджером.';

  const openMessageText = (): void => {
    setIsMessageOpen(true);
  };

  return (
    <S.Container onClick={onClick}>
      <S.Input disableUnderline fullWidth multiline autoFocus />
      {!isMessageOpen ? (
        <Tooltip title="Показать скрытую часть" onClick={openMessageText}>
          <S.IconButtonStld shape="square">
            <MoreHorizRounded fontSize="small" />
          </S.IconButtonStld>
        </Tooltip>
      ) : (
        <Box sx={{ pb: 2 }}>
          <Typography variant="body3">
            пн, 4 июл. 2022 г. в 17:56, Notification Innowise
            notification@innowise-group.com
          </Typography>
          <S.PrevMessage>{text}</S.PrevMessage>
        </Box>
      )}
    </S.Container>
  );
};
