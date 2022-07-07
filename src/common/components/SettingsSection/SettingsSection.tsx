import React, { FC } from 'react';
import { S } from './SettingsSection.styles';
import { Typography } from '@mui/material';
import { SettingsSectionProps } from './SettingsSection.interfaces';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '../../ui-kit/IconButton/IconButton';

const SettingsSection: FC<SettingsSectionProps> = ({ setIsSettingsOpen }) => {
  return (
    <S.SettingsSectionWrapper>
      <S.SettingsSectionHeader>
        <S.SettingsSectionHeaderBarWrapper>
          <Typography>Быстрые настройки</Typography>
          <IconButton onClick={setIsSettingsOpen}>
            <CloseIcon fontSize={'small'} />
          </IconButton>
        </S.SettingsSectionHeaderBarWrapper>
        <S.AllSettingsButton variant={'outlined'}>
          Все настройки
        </S.AllSettingsButton>
      </S.SettingsSectionHeader>
      <S.SettingsSectionContent>
        <S.SettingsSectionItem>
          <S.OriginalViewWrapper>
            <S.OriginalViewWrapperTextContent>
              <Typography>Включен оригинальный вид Gmail</Typography>
            </S.OriginalViewWrapperTextContent>
          </S.OriginalViewWrapper>
        </S.SettingsSectionItem>
      </S.SettingsSectionContent>
    </S.SettingsSectionWrapper>
  );
};

export default SettingsSection;
