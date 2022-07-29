import { FC, useState } from 'react';
import Aside from '../Aside/Aside';
import { Header } from '../Header/Header';
import { LayoutProps } from './Layout.interfaces';
import * as S from './Layout.styles';
import SettingsSection from '../SettingsSection/SettingsSection';

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const onHideButtonClick = (): void => {
    setIsAsideOpen((prev) => !prev);
  };

  const setIsSettingsOpenHandler = (): void => {
    setIsSettingsOpen((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <Header
        onHideButtonClick={onHideButtonClick}
        setIsSettingsOpenHandler={setIsSettingsOpenHandler}
      />
      <S.Container>
        <Aside isOpen={isAsideOpen} />
        <S.Main>{children}</S.Main>
        {isSettingsOpen && (
          <SettingsSection setIsSettingsOpen={setIsSettingsOpenHandler} />
        )}
      </S.Container>
    </S.Wrapper>
  );
};
