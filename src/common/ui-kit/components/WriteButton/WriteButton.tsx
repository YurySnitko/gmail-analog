import React, { FC } from 'react';
import { ButtonProps } from './WriteButton.interfaces';
import { S } from './WriteButton.styles';
import { useRouter } from 'next/router';
import { enUS } from '../../../../locales/en/translation';
import { ru } from '../../../../locales/ru/translation';

const WriteButton: FC<ButtonProps> = ({ isOpen }) => {
  const { locale } = useRouter();

  const t = locale === 'en-US' ? enUS : ru;

  return (
    <S.Button>
      <S.WriteButtonWrapper isOpen={isOpen}>
        <S.EditIcon />
        {isOpen && <S.WriteButtonText>{t.write}</S.WriteButtonText>}
      </S.WriteButtonWrapper>
    </S.Button>
  );
};

export default WriteButton;
