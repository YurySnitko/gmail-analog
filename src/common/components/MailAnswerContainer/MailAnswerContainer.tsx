import { Avatar } from '@mui/material';
import { FC, useState } from 'react';
import { ChooseAddressee } from '../ChooseAddresse/ChooseAddressee';
import { MailAnswerBody } from '../MailAnswerBody/MailAnswerBody';
import { MailAnswerControls } from '../MailAnswerControls/MailAnswerControls';
import { MailAnswerContainerProps } from './MailAnswerContainer.interfaces';
import * as S from './MailAnswerContainer.styles';

export const MailAnswerContainer: FC<MailAnswerContainerProps> = ({
  toogleAnswerMode,
}) => {
  const [isChooseAddresseeInEditMode, setIsChooseAddresseeInEditMode] =
    useState<boolean>(false);

  const onChooseAddresseClick = (): void => {
    setIsChooseAddresseeInEditMode(true);
  };

  const onMailAnswerBodyClick = (): void => {
    setIsChooseAddresseeInEditMode(false);
  };

  return (
    <S.MainContainer>
      <S.AvatarWrapper>
        <Avatar />
      </S.AvatarWrapper>
      <S.Container>
        <ChooseAddressee
          isEditMode={isChooseAddresseeInEditMode}
          onClick={onChooseAddresseClick}
        />
        <MailAnswerBody onClick={onMailAnswerBodyClick} />
        <MailAnswerControls toogleAnswerMode={toogleAnswerMode} />
      </S.Container>
    </S.MainContainer>
  );
};
