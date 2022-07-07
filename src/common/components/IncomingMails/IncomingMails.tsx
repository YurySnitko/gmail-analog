import React, { useEffect, useState } from 'react';
import MailListHeader from '../../ui-kit/MailListHeader/MailListHeader';
import MailList from '../../ui-kit/MailList/MailList';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { getMailsFetch } from '../../../store/reducers/MailsSlice';
import { CircularProgress } from '@mui/material';
import { S } from './IncomingMails.styles';

const IncomingMails = () => {
  const [selectedMailsIds, setSelectedMailsIds] = useState<string[]>([]);
  const { mails, isLoading } = useAppSelector((state) => state.mail);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMailsFetch());
  }, [dispatch]);

  const setSelectedMailsIdsHandler = (ids: string[]) => {
    setSelectedMailsIds(ids);
  };

  return (
    <div>
      {isLoading ? (
        <S.LoaderWrapper>
          <CircularProgress />
        </S.LoaderWrapper>
      ) : (
        <>
          <MailListHeader
            selectedMailsIds={selectedMailsIds}
            setSelectedMailsIds={setSelectedMailsIdsHandler}
          />
          <MailList
            mailList={mails}
            selectedMailsIds={selectedMailsIds}
            setSelectedMailsIds={setSelectedMailsIdsHandler}
          />
        </>
      )}
    </div>
  );
};

export default IncomingMails;
