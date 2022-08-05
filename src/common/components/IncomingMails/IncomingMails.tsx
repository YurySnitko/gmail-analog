import React, { FC, useEffect, useState } from 'react';
import MailListHeader from '../MailListHeader/MailListHeader';
import MailList from '../MailList/MailList';
import { getMailsFetch } from '../../../store/reducers/MailsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { Loader } from '../../ui-kit/components/Loader/Loader';
import { Mail } from '../Mail/Mail';
import { MailData } from '../../../mocked/mails';
import { ReflexContainer, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';
import { getSplit } from '../../../store/reducers/SettingsSlice';
import { S } from './IncomingMails.styles';

const IncomingMails: FC = () => {
  const [selectedMailsIds, setSelectedMailsIds] = useState<string[]>([]);
  const [clickedItem, setClickedItem] = useState<MailData>();
  const { mails, isLoading } = useAppSelector((state) => state.mail);
  const split = useAppSelector((state) => state.settings.split);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSplit());
    dispatch(getMailsFetch());
  }, [dispatch]);

  const setSelectedMailsIdsHandler = (ids: string[]): void => {
    setSelectedMailsIds(ids);
  };

  const setClickedItemHandler = (id: string): void => {
    setClickedItem(mails.find((item) => item._id === id));
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
          <ReflexElement
            flex={0.5}
            minSize={400}
            style={{ overflowY: 'hidden' }}
          >
            {clickedItem ? (
              <Mail mailData={clickedItem} />
            ) : (
              <S.SecondPanelWrapper>
                <S.SecondPanelTitle>Цепочки не выбраны</S.SecondPanelTitle>
              </S.SecondPanelWrapper>
            )}
          </ReflexElement>
        </ReflexContainer>
      );
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
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
