import { FC, useState } from 'react';
import Aside from '../Aside/Aside';
import { Header } from '../Header/Header';
import { LayoutProps } from './Layout.interfaces';
import * as S from './Layout.styles';
import SettingsSection from '../SettingsSection/SettingsSection';
import { Paper } from '@mui/material';

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
    <Paper>
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
    </Paper>
  );
};
