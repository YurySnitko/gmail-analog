import { Grid } from '@mui/material';
import { FC } from 'react';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';
import * as S from './MailHeader.styles';
import { MoreVertOutlined, StarOutline } from '@mui/icons-material';
import { MailHeaderProps } from './MailHeader.interfaces';
import { Tooltip } from '../../ui-kit/components/Tooltip/Tooltip';

export const MailHeader: FC<MailHeaderProps> = ({
  senderName,
  senderEmail,
  date,
}) => {
  return (
    <S.Container>
      <Grid container direction="column">
        <Grid item container alignItems="center">
          <S.SenderInfoGrid item xs container>
            <S.SenderInfoWrapperTypography noWrap>
              <S.SenderInfoTypography variant="subtitle2" component="span">
                {senderName}
              </S.SenderInfoTypography>
              &nbsp;
              <S.SenderInfoTypography variant="body3" component="span">
                {`<${senderEmail}>`}
              </S.SenderInfoTypography>
            </S.SenderInfoWrapperTypography>
          </S.SenderInfoGrid>
          <S.DateGrid item xs="auto" container alignItems="center">
            <S.DateTypography variant="body3" component="span">
              {date}
            </S.DateTypography>
            <S.Toolbar>
              <Tooltip title="Не помечено">
                <IconButton>
                  <StarOutline fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Ответить">
                <IconButton>
                  <S.ShortcutOutlinedLeft fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Ещё">
                <IconButton>
                  <MoreVertOutlined fontSize="small" />
                </IconButton>
              </Tooltip>
            </S.Toolbar>
          </S.DateGrid>
        </Grid>
        <Grid item container alignItems="center">
          <S.AddresseeTypography noWrap variant="body3" component="span">
            кому: мне
          </S.AddresseeTypography>
        </Grid>
      </Grid>
    </S.Container>
  );
};
