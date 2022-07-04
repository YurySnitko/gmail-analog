import { Tooltip } from '@mui/material';
import { FC } from 'react';
import { TagProps } from './Tag.interfaces';
import * as S from './Tag.styles';

export const Tag: FC<TagProps> = ({ children }) => {
  return (
    <S.Container>
      <Tooltip title={`Поиск всех сообщений с ярлыком ${children}`}>
        <S.TitleTypography variant="body3" component="div">
          {children}
        </S.TitleTypography>
      </Tooltip>
      <Tooltip title={`Удалить ярлык ${children} из данной цепочки`}>
        <S.Delete variant="body3" component="div">
          &times;
        </S.Delete>
      </Tooltip>
    </S.Container>
  );
};
