import React, { useEffect, useState } from 'react';
import MailListHeader from '../../ui-kit/MailListHeader/MailListHeader';
import MailList from '../../ui-kit/MailList/MailList';
import { mails } from '../../../../consts/mails';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { getMailsFetch } from '../../../store/reducers/MailsSlice';

const IncomingMails = () => {
  const [selectedMailsIds, setSelectedMailsIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const test = useAppSelector((state) => state.mailReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMailsFetch());
  }, [dispatch]);

  console.log(test);

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
      <MailList
        mailList={mails}
        selectedMailsIds={selectedMailsIds}
        setSelectedMailsIds={setSelectedMailsIdsHandler}
        currentPage={currentPage}
      />
    </div>
  );
};

export default IncomingMails;
