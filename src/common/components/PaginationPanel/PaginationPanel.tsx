import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { IconButton } from '../../ui-kit/IconButton/IconButton';
import { S } from './PaginationPanel.styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Tooltip } from '@mui/material';

const PaginationPanel = () => {
  return (
    <S.PaginationPanelWrapper>
      <S.PageButton>1-50 из 383</S.PageButton>
      <Tooltip title={'Пред.'}>
        <IconButton>
          <KeyboardArrowLeftIcon fontSize={'medium'} />
        </IconButton>
      </Tooltip>
      <Tooltip title={'След.'}>
        <IconButton>
          <KeyboardArrowRightIcon fontSize={'medium'} />
        </IconButton>
      </Tooltip>
    </S.PaginationPanelWrapper>
  );
};

export default PaginationPanel;
