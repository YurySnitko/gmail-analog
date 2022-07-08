import React, { FC, useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { IconButton } from '../../ui-kit/IconButton/IconButton';
import { S } from './PaginationPanel.styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Tooltip } from '@mui/material';
import { PaginationPanelProps } from './PaginationPanel.interfaces';

const PaginationPanel: FC<PaginationPanelProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const [begin, setBegin] = useState<number>(1);
  const [end, setEnd] = useState<number>(10);

  useEffect(() => {
    setBegin((currentPage - 1) * 10);
    setEnd(currentPage * 10);
  }, [currentPage]);

  const prevPageClickHandler = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPageClickHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <S.PaginationPanelWrapper>
      <S.PageButton>
        {begin + 1}-{end} из 40
      </S.PageButton>
      <Tooltip open={false} title={'Пред.'}>
        <IconButton disabled={currentPage === 1} onClick={prevPageClickHandler}>
          <KeyboardArrowLeftIcon fontSize={'medium'} />
        </IconButton>
      </Tooltip>
      <Tooltip title={'След.'}>
        <IconButton onClick={nextPageClickHandler}>
          <KeyboardArrowRightIcon fontSize={'medium'} />
        </IconButton>
      </Tooltip>
    </S.PaginationPanelWrapper>
  );
};

export default React.memo(PaginationPanel);
