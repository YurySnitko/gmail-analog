import { FC, useState } from 'react';
import { ChooseAddressee } from '../ChooseAddresse/ChooseAddressee';
import { MailAnswerBody } from '../MailAnswerBody/MailAnswerBody';
import { MailAnswerControls } from '../MailAnswerControls/MailAnswerControls';
import { MailAnswerContainerProps } from './MailAnswerContainer.interfaces';
import * as S from './MailAnswerContainer.styles';

export const MailAnswerContainer: FC<MailAnswerContainerProps> = ({
  toogleAnswerContainerMode,
  toogleAnswerMode,
  answerMode,
}) => {
  const [isChooseAddresseeInEditMode, setIsChooseAddresseeInEditMode] =
    useState<boolean>(false);

  const toogleChooseAddresseeEditMode = (isEditMode: boolean): void => {
    setIsChooseAddresseeInEditMode(isEditMode);
  };

  return (
    <S.MainContainer>
      <S.AvatarWrapper>
        <S.Avatar />
      </S.AvatarWrapper>
      <S.Container>
        <ChooseAddressee
          answerMode={answerMode}
          isEditMode={isChooseAddresseeInEditMode}
          toogleChooseAddresseeEditMode={toogleChooseAddresseeEditMode}
          toogleAnswerMode={toogleAnswerMode}
        />
        <MailAnswerBody
          answerMode={answerMode}
          toogleChooseAddresseeEditMode={toogleChooseAddresseeEditMode}
        />
        <MailAnswerControls
          toogleAnswerContainerMode={toogleAnswerContainerMode}
        />
      </S.Container>
    </S.MainContainer>
  );
};
