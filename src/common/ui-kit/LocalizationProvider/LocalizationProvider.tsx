import React, { createContext, FC } from 'react';
import { ru } from '../../../locales/ru/translation';
import { Locales } from '../../../locales/locales.interfaces';
import { useRouter } from 'next/router';
import { enUS } from '../../../locales/en/translation';
import { LocalizationProviderProps } from './LocalizationProvider.interfaces';

export const LocalizationContext = createContext<Locales>(ru);

const LocalizationProvider: FC<LocalizationProviderProps> = ({ children }) => {
  const { locale } = useRouter();

  const t = locale === 'en-US' ? enUS : ru;

  return (
    <LocalizationContext.Provider value={t}>
      {children}
    </LocalizationContext.Provider>
  );
};

export default LocalizationProvider;
