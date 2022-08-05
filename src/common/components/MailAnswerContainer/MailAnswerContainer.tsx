import { FC, useState } from 'react';
import { ChooseAddressee } from '../ChooseAddresse/ChooseAddressee';
import { MailAnswerBody } from '../MailAnswerBody/MailAnswerBody';
import { MailAnswerControls } from '../MailAnswerControls/MailAnswerControls';
import { MailAnswerContainerProps } from './MailAnswerContainer.interfaces';
import * as S from './MailAnswerContainer.styles';

export const MailAnswerContainer: FC<MailAnswerContainerProps> = ({ toggleAnswerContainerMode,
  toggleAnswerMode,
  answerMode,
}) => {
  const [isChooseAddresseeInEditMode, setIsChooseAddresseeInEditMode] =
    useState<boolean>(false);

  const toggleChooseAddresseeEditMode = (isEditMode: boolean): void => {
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
          toggleChooseAddresseeEditMode={toggleChooseAddresseeEditMode}
          toggleAnswerMode={toggleAnswerMode}
        />
        <MailAnswerBody
          answerMode={answerMode}
          toggleChooseAddresseeEditMode={toggleChooseAddresseeEditMode}
        />
        <MailAnswerControls
          toggleAnswerContainerMode={toggleAnswerContainerMode}
        />
      </S.Container>
    </S.MainContainer>
  );
};
