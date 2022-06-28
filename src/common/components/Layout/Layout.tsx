import { FC, useState } from 'react';
import Aside from '../Aside/Aside';
import { Header } from '../Header/Header';
import { LayoutProps } from './Layout.interfaces';
import * as S from './Layout.styles';

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(true);

  const onHideButtonClick = (): void => {
    setIsAsideOpen((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <Header onHideButtonClick={onHideButtonClick} />
      <S.Container>
        <Aside isOpen={isAsideOpen} />
        <S.Main>{children}</S.Main>
      </S.Container>
    </S.Wrapper>
  );
};
