import React, { FC } from 'react';
import { S } from './SettingsSection.styles';
import {
  Checkbox,
  FormControlLabel,
  Radio,
  Tooltip,
  Typography,
} from '@mui/material';
import { SettingsSectionProps } from './SettingsSection.interfaces';
import CloseIcon from '@mui/icons-material/Close';
import originalGmail from '../../ui-kit/assets/originalGmail.png';
import defaultInterfaceImage from '../../ui-kit/assets/defaultInterface.png';
import normalInterfaceImage from '../../ui-kit/assets/normalInterface.png';
import compactInterfaceImage from '../../ui-kit/assets/compactInterface.png';
import themeImage from '../../ui-kit/assets/themeImage.png';
import defaultViewImage from '../../ui-kit/assets/defaultView.png';
import importantViewImage from '../../ui-kit/assets/importantFirst.png';
import unreadViewImage from '../../ui-kit/assets/unreadFirst.png';
import starredViewImage from '../../ui-kit/assets/starredFirst.png';
import priorityViewImage from '../../ui-kit/assets/priorityinbox.png';
import multipleViewImage from '../../ui-kit/assets/multipleInboxes.png';
import defaultViewAreaImage from '../../ui-kit/assets/defaultViewArea.png';
import previewPanelRightImage from '../../ui-kit/assets/previewpaneright.png';
import previewPanelBottomImage from '../../ui-kit/assets/previewpanebottom.png';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Image from 'next/image';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';

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
              <S.SettingsSectionButton variant={'outlined'}>
                Попробовать новый вид
              </S.SettingsSectionButton>
            </S.OriginalViewWrapperTextContent>
            <S.OriginalViewImageWrapper>
              <Image src={originalGmail} alt={'original gmail view'} />
            </S.OriginalViewImageWrapper>
          </S.OriginalViewWrapper>
        </S.SettingsSectionItem>
        <S.SettingsSectionItem>
          <S.InterfaceItemWrapper>
            <S.SectionTitle>Интерфейс</S.SectionTitle>
            <S.RadioGroupWrapper>
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>По умолчанию</S.SettingsItemText>
                    <Image
                      src={defaultInterfaceImage}
                      alt={'интерфейс по умолчанию'}
                    />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>Обычный</S.SettingsItemText>
                    <Image
                      src={normalInterfaceImage}
                      alt={'обычный интерфейс'}
                    />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>Компактный</S.SettingsItemText>
                    <Image
                      src={compactInterfaceImage}
                      alt={'компактный интерфейс'}
                    />
                  </S.SettingsLabelItem>
                }
              />
            </S.RadioGroupWrapper>
          </S.InterfaceItemWrapper>
        </S.SettingsSectionItem>
        <S.SettingsSectionItem>
          <S.ThemeItemWrapper>
            <S.ThemeTitleWrapper>
              <S.SectionTitle>Тема</S.SectionTitle>
              <S.SettingsSectionButton variant={'outlined'}>
                Просмотреть все
              </S.SettingsSectionButton>
            </S.ThemeTitleWrapper>
            <S.ThemeImageWrapper>
              <Image src={themeImage} alt={'Изображение темы'} />
            </S.ThemeImageWrapper>
          </S.ThemeItemWrapper>
        </S.SettingsSectionItem>
        <S.SettingsSectionItem>
          <S.DefaultViewItemWrapper>
            <S.SectionTitle>Вид по умолчанию</S.SectionTitle>
            <S.RadioGroupWrapper>
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>По умолчанию</S.SettingsItemText>
                    <Image src={defaultViewImage} alt={'Вид по умолчанию'} />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>Сначала важные</S.SettingsItemText>
                    <Image src={importantViewImage} alt={'Сначала важные'} />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>
                      Сначала непрочитанные
                    </S.SettingsItemText>
                    <Image
                      src={unreadViewImage}
                      alt={'Сначала непрочитанные'}
                    />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>Сначала помеченные</S.SettingsItemText>
                    <Image src={starredViewImage} alt={'Сначала помеченные'} />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>Приоритетные</S.SettingsItemText>
                    <Image src={priorityViewImage} alt={'Приоритетные'} />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>
                      Дополнительные папки
                    </S.SettingsItemText>
                    <Image
                      src={multipleViewImage}
                      alt={'Дополнительные папки'}
                    />
                  </S.SettingsLabelItem>
                }
              />
            </S.RadioGroupWrapper>
          </S.DefaultViewItemWrapper>
        </S.SettingsSectionItem>
        <S.SettingsSectionItem>
          <S.DefaultViewItemWrapper>
            <S.SectionTitle>Область просмотра</S.SectionTitle>
            <S.RadioGroupWrapper>
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>Не разделять</S.SettingsItemText>
                    <Image
                      src={defaultViewAreaImage}
                      alt={'Не разделять область просмотра'}
                    />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>Справа</S.SettingsItemText>
                    <Image
                      src={previewPanelRightImage}
                      alt={'Область просмотра справа'}
                    />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>Снизу</S.SettingsItemText>
                    <Image
                      src={previewPanelBottomImage}
                      alt={'Обрасть просмотра снизу'}
                    />
                  </S.SettingsLabelItem>
                }
              />
            </S.RadioGroupWrapper>
          </S.DefaultViewItemWrapper>
        </S.SettingsSectionItem>
        <S.SettingsSectionItem>
          <S.DefaultViewItemWrapper>
            <S.SectionTitle>Объединение писем в цепочки</S.SectionTitle>
            <S.ConcatMailsContent>
              <Checkbox size={'small'} />
              <S.ConcatMailsContentText>
                Просмотр в виде цепочки
              </S.ConcatMailsContentText>
              <Tooltip
                title={'Групировать письма с одной темой в цепочки'}
                placement={'top'}
              >
                <HelpOutlineOutlinedIcon fontSize={'small'} />
              </Tooltip>
            </S.ConcatMailsContent>
          </S.DefaultViewItemWrapper>
        </S.SettingsSectionItem>
      </S.SettingsSectionContent>
    </S.SettingsSectionWrapper>
  );
};

export default SettingsSection;
