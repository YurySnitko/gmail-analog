import React, { useEffect, useState } from 'react';
import MailListHeader from '../../ui-kit/MailListHeader/MailListHeader';
import MailList from '../../ui-kit/MailList/MailList';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { getMailsFetch } from '../../../store/reducers/MailsSlice';
import { CircularProgress } from '@mui/material';
import { S } from './IncomingMails.styles';

const IncomingMails = () => {
  const [selectedMailsIds, setSelectedMailsIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { mails, isLoading } = useAppSelector((state) => state.mailReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMailsFetch());
  }, [dispatch]);

  const setSelectedMailsIdsHandler = (ids: string[]) => {
    setSelectedMailsIds(ids);
  };

  const setCurrentPageHandler = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <div>
      <MailListHeader
        selectedMailsIds={selectedMailsIds}
        setSelectedMailsIds={setSelectedMailsIdsHandler}
        currentPage={currentPage}
        setCurrentPage={setCurrentPageHandler}
      />
      {isLoading ? (
        <S.LoaderWrapper>
          <CircularProgress />
        </S.LoaderWrapper>
      ) : (
        <MailList
          mailList={mails}
          selectedMailsIds={selectedMailsIds}
          setSelectedMailsIds={setSelectedMailsIdsHandler}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default IncomingMails;
