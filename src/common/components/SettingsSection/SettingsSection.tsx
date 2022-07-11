import React, { FC } from 'react';
import { S } from './SettingsSection.styles';
import { FormControlLabel, Radio, Typography } from '@mui/material';
import { SettingsSectionProps } from './SettingsSection.interfaces';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';
import originalGmail from '../../ui-kit/assets/originalGmail.png';
import defaultInterfaceImage from '../../ui-kit/assets/defaultInterface.png';
import normalInterfaceImage from '../../ui-kit/assets/normalInterface.png';
import compactInterfaceImage from '../../ui-kit/assets/compactInterface.png';
import Image from 'next/image';

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
              <S.OriginalGmailText>
                Включен оригинальный вид Gmail
              </S.OriginalGmailText>
              <S.TryNewViewButton variant={'outlined'}>
                Попробовать новый вид
              </S.TryNewViewButton>
            </S.OriginalViewWrapperTextContent>
            <S.OriginalViewImageWrapper>
              <Image src={originalGmail} alt={'original gmail view'} />
            </S.OriginalViewImageWrapper>
          </S.OriginalViewWrapper>
        </S.SettingsSectionItem>
        <S.SettingsSectionItem>
          <S.InterfaceItemWrapper>
            <S.InterfaceTitle>Интерфейс</S.InterfaceTitle>
            <S.InterfaceItemContentWrapper>
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.InterfaceItemContentItem>
                    <S.InterfaceItemText>По умолчанию</S.InterfaceItemText>
                    <Image
                      src={defaultInterfaceImage}
                      alt={'интерфейс по умолчанию'}
                    />
                  </S.InterfaceItemContentItem>
                }
              />
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.InterfaceItemContentItem>
                    <S.InterfaceItemText>Обычный</S.InterfaceItemText>
                    <Image
                      src={normalInterfaceImage}
                      alt={'обычный интерфейс'}
                    />
                  </S.InterfaceItemContentItem>
                }
              />
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.InterfaceItemContentItem>
                    <S.InterfaceItemText>Компактный</S.InterfaceItemText>
                    <Image
                      src={compactInterfaceImage}
                      alt={'компактный интерфейс'}
                    />
                  </S.InterfaceItemContentItem>
                }
              />
            </S.InterfaceItemContentWrapper>
          </S.InterfaceItemWrapper>
        </S.SettingsSectionItem>
        <S.SettingsSectionItem>
          <S.ThemeItemWrapper>
            <Typography>Тема</Typography>
          </S.ThemeItemWrapper>
        </S.SettingsSectionItem>
      </S.SettingsSectionContent>
    </S.SettingsSectionWrapper>
  );
};

export default SettingsSection;
