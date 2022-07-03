import React, { FC } from 'react';
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
  const begin = (currentPage - 1) * 10;
  const end = begin + 10;

  const prevPageClickHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const nextPageClickHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <S.PaginationPanelWrapper>
      <S.PageButton>
        {begin + 1}-{end} из 40
      </S.PageButton>
      <Tooltip title={'Пред.'}>
        <IconButton onClick={prevPageClickHandler}>
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
