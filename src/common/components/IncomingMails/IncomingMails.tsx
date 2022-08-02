import React, { FC, useEffect, useState } from 'react';
import MailListHeader from '../MailListHeader/MailListHeader';
import MailList from '../MailList/MailList';
import { getMailsFetch } from '../../../store/reducers/MailsSlice';
import { CircularProgress } from '@mui/material';
import { S } from './IncomingMails.styles';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { Mail } from '../Mail/Mail';
import { MailData } from '../../../mocked/mails';

const IncomingMails: FC = () => {
  const [selectedMailsIds, setSelectedMailsIds] = useState<string[]>([]);
  const [clickedItem, setClickedItem] = useState<MailData>();
  const { mails, isLoading } = useAppSelector((state) => state.mail);
  const split = useAppSelector((state) => state.settings.split);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMailsFetch());
  }, [dispatch]);

  useEffect(() => {}, [clickedItem]);

  const setSelectedMailsIdsHandler = (ids: string[]): void => {
    setSelectedMailsIds(ids);
  };

  const setClickedItemHandler = (id: string): void => {
    setClickedItem(mails.find((item) => item.id === id));
  };

  const mailListRender = (): React.ReactNode => {
    if (split === 'noSplit') {
      return (
        <MailList
          mailList={mails}
          selectedMailsIds={selectedMailsIds}
          setSelectedMailsIds={setSelectedMailsIdsHandler}
        />
      );
    } else {
      return (
        <S.SplitWrapper
          split={split === 'splitRight' ? 'vertical' : 'horizontal'}
          defaultSize={'50%'}
          minSize={split === 'splitRight' ? 300 : 100}
          maxSize={split === 'splitRight' ? 900 : 500}
        >
          <MailList
            mailList={mails}
            selectedMailsIds={selectedMailsIds}
            setSelectedMailsIds={setSelectedMailsIdsHandler}
            setClickedItemHandler={setClickedItemHandler}
          />
          {clickedItem ? (
            <Mail mailData={clickedItem} />
          ) : (
            <div>Loading...</div>
          )}
        </S.SplitWrapper>
      );
    }
  };

  return (
    <>
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
          {mailListRender()}
        </>
      )}
    </>
  );
};

export default IncomingMails;
