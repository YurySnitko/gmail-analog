import { Grid, Tooltip } from '@mui/material';
import { FC } from 'react';
import { IconButton } from '../../ui-kit/IconButton/IconButton';
import * as S from './MailHeader.styles';
import { MoreVertOutlined, StarOutline } from '@mui/icons-material';

export const MailHeader: FC = () => {
  return (
    <S.Container>
      <Grid container direction="column">
        <Grid item container alignItems="center">
          <S.SenderInfoGrid item xs container>
            <S.SenderInfoWrapperTypography noWrap>
              <S.SenderInfoTypography variant="subtitle2" component="span">
                Max Zaitsev
              </S.SenderInfoTypography>
              &nbsp;
              <S.SenderInfoTypography variant="body3" component="span">
                max.zaitsev@innowise-group.com
              </S.SenderInfoTypography>
            </S.SenderInfoWrapperTypography>
          </S.SenderInfoGrid>
          <S.DateGrid item xs="auto" container alignItems="center">
            <S.DateTypography variant="body3" component="span">
              22 июн. 2022 г., 00:22
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
