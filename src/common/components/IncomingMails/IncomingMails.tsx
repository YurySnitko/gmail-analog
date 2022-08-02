import React, { FC, useEffect, useState } from 'react';
import MailListHeader from '../MailListHeader/MailListHeader';
import MailList from '../MailList/MailList';
import { getMailsFetch } from '../../../store/reducers/MailsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { Loader } from '../../ui-kit/components/Loader/Loader';

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
        <Loader />
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
