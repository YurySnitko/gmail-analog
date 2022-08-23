import { FC, useState } from 'react';
import { ChooseAddressee } from '../ChooseAddresse/ChooseAddressee';
import { MailAnswerBody } from '../MailAnswerBody/MailAnswerBody';
import { MailAnswerControls } from '../MailAnswerControls/MailAnswerControls';
import { MailAnswerContainerProps } from './MailAnswerContainer.interfaces';
import * as S from './MailAnswerContainer.styles';
import { EditorState } from 'draft-js';

export const MailAnswerContainer: FC<MailAnswerContainerProps> = ({ toggleAnswerContainerMode,
  toggleAnswerMode,
  answerMode,
}) => {
  const [isChooseAddresseeInEditMode, setIsChooseAddresseeInEditMode] =
    useState<boolean>(false);
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty()
  );

  const onEditorStateChange = (state: EditorState): void => {
    setEditorState(state);
  };

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
          editorState={editorState}
          answerMode={answerMode}
          onEditorStateChange={onEditorStateChange}
          toggleChooseAddresseeEditMode={toggleChooseAddresseeEditMode}
        />
        <MailAnswerControls
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toggleAnswerContainerMode={toggleAnswerContainerMode}
        />
      </S.Container>
    </S.MainContainer>
  );
};
