import React, { FC, useEffect, useState } from 'react';
import MailListHeader from '../MailListHeader/MailListHeader';
import MailList from '../MailList/MailList';
import { getMailsFetch } from '../../../store/reducers/MailsSlice';
import { CircularProgress } from '@mui/material';
import { S } from './IncomingMails.styles';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import SplitPane, { Pane } from 'react-split-pane';

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
          <S.SplitWrapper
            split={'vertical'}
            defaultSize={'50%'}
            minSize={'20%'}
            maxSize={'80%'}
          >
            <MailList
              mailList={mails}
              selectedMailsIds={selectedMailsIds}
              setSelectedMailsIds={setSelectedMailsIdsHandler}
            />
            <div>
              <h1>test</h1>
            </div>
          </S.SplitWrapper>
        </>
      )}
    </div>
  );
};

export default IncomingMails;
