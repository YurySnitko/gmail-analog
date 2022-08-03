import React, { FC, useEffect, useState } from 'react';
import MailListHeader from '../MailListHeader/MailListHeader';
import MailList from '../MailList/MailList';
import { getMailsFetch } from '../../../store/reducers/MailsSlice';
import { CircularProgress } from '@mui/material';
import { S } from './IncomingMails.styles';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { Mail } from '../Mail/Mail';
import { MailData } from '../../../mocked/mails';
import { ReflexContainer, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';

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
        <ReflexContainer
          orientation={split === 'splitRight' ? 'vertical' : 'horizontal'}
        >
          <ReflexElement
            flex={0.5}
            minSize={split === 'splitRight' ? 400 : 100}
          >
            <MailList
              mailList={mails}
              selectedMailsIds={selectedMailsIds}
              setSelectedMailsIds={setSelectedMailsIdsHandler}
              setClickedItemHandler={setClickedItemHandler}
            />
          </ReflexElement>
          <S.Splitter />
          <ReflexElement flex={0.5} minSize={400}>
            {clickedItem ? (
              <Mail mailData={clickedItem} />
            ) : (
              <div>Цепочки не выбраны</div>
            )}
          </ReflexElement>
        </ReflexContainer>
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
