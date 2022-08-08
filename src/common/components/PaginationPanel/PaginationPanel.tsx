import React, { FC, useContext, useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';
import { S } from './PaginationPanel.styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Tooltip } from '@mui/material';
import { PaginationPanelProps } from './PaginationPanel.interfaces';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { nextPage, prevPage } from '../../../store/reducers/PaginationSlice';
import { LocalizationContext } from '../../ui-kit/LocalizationProvider/LocalizationProvider';

const PaginationPanel: FC<PaginationPanelProps> = () => {
  const { currentPage, pageSize } = useAppSelector((state) => state.pagination);
  const { length: mailsLength } = useAppSelector((state) => state.mail.mails);
  const [begin, setBegin] = useState<number>(1);
  const [end, setEnd] = useState<number>(pageSize);
  const dispatch = useAppDispatch();
  const t = useContext(LocalizationContext);

  useEffect(() => {
    setBegin((currentPage - 1) * pageSize);
    const endItem = currentPage * pageSize;
    setEnd(endItem > mailsLength ? mailsLength : endItem);
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
      <Tooltip title={t.mailsPaginationNewerTooltip}>
        <div>
          <IconButton
            disabled={currentPage === 1}
            onClick={prevPageClickHandler}
          >
            <KeyboardArrowLeftIcon fontSize={'medium'} />
          </IconButton>
        </div>
      </Tooltip>
      <Tooltip title={t.mailsPaginationOlderTooltip}>
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
