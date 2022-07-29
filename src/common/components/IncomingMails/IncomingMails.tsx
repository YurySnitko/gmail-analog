import React, { FC, useEffect, useState } from 'react';
import MailListHeader from '../../ui-kit/components/MailListHeader/MailListHeader';
import MailList from '../../ui-kit/components/MailList/MailList';
import { getMailsFetch } from '../../../store/reducers/MailsSlice';
import { CircularProgress } from '@mui/material';
import { S } from './IncomingMails.styles';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';

const IncomingMails: FC = () => {
  const [selectedMailsIds, setSelectedMailsIds] = useState<string[]>([]);
  const { mails, isLoading } = useAppSelector((state) => state.mail);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMailsFetch());
  }, [dispatch]);

  const setSelectedMailsIdsHandler = (ids: string[]): void => {
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
