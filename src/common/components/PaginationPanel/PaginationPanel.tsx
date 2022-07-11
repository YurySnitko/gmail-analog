import React, { FC, useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';
import { S } from './PaginationPanel.styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Tooltip } from '@mui/material';
import { PaginationPanelProps } from './PaginationPanel.interfaces';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { nextPage, prevPage } from '../../../store/reducers/PaginationSlice';

const PaginationPanel: FC<PaginationPanelProps> = () => {
  const { currentPage, pageSize } = useAppSelector((state) => state.pagination);
  const { length: mailsLength } = useAppSelector((state) => state.mail.mails);
  const [begin, setBegin] = useState<number>(1);
  const [end, setEnd] = useState<number>(pageSize);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setBegin((currentPage - 1) * pageSize);
    setEnd(currentPage * pageSize);
  }, [currentPage, pageSize]);

  const prevPageClickHandler = (): void => {
    dispatch(prevPage());
  };

  const nextPageClickHandler = (): void => {
    dispatch(nextPage());
  };

  return (
    <S.PaginationPanelWrapper>
      <S.PageButton>
        {begin + 1}-{end} из {mailsLength}
      </S.PageButton>
      <Tooltip open={false} title={'Пред.'}>
        <IconButton disabled={currentPage === 1} onClick={prevPageClickHandler}>
          <KeyboardArrowLeftIcon fontSize={'medium'} />
        </IconButton>
      </Tooltip>
      <Tooltip title={'След.'}>
        <IconButton
          disabled={currentPage === Math.ceil(mailsLength / pageSize)}
          onClick={nextPageClickHandler}
        >
          <KeyboardArrowRightIcon fontSize={'medium'} />
        </IconButton>
      </Tooltip>
    </S.PaginationPanelWrapper>
  );
};

export default React.memo(PaginationPanel);
