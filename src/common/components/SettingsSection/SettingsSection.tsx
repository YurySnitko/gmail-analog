import React, { FC, useContext } from 'react';
import { S } from './SettingsSection.styles';
import { FormControlLabel, Tooltip, Typography } from '@mui/material';
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
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { changeSplit } from '../../../store/reducers/SettingsSlice';
import { LocalizationContext } from '../../ui-kit/LocalizationProvider/LocalizationProvider';

const SettingsSection: FC<SettingsSectionProps> = ({ setIsSettingsOpen }) => {
  const { split } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  const t = useContext(LocalizationContext);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeSplit((event.target as HTMLInputElement).value));
  };

  return (
    <S.SettingsSectionWrapper>
      <S.SettingsSectionHeader>
        <S.SettingsSectionHeaderBarWrapper>
          <Typography>{t.settingsTitle}</Typography>
          <IconButton hoverbackground={'light'} onClick={setIsSettingsOpen}>
            <CloseIcon fontSize={'small'} />
          </IconButton>
        </S.SettingsSectionHeaderBarWrapper>
        <S.AllSettingsButton variant={'outlined'}>
          {t.settingsButton}
        </S.AllSettingsButton>
      </S.SettingsSectionHeader>
      <S.SettingsSectionContent>
        <S.SettingsSectionItem>
          <S.OriginalViewWrapper>
            <S.OriginalViewWrapperTextContent>
              <S.OriginalGmailText>
                {t.settingsOriginalView}
              </S.OriginalGmailText>
              <S.SettingsSectionButton variant={'outlined'}>
                {t.settingsOriginViewButton}
              </S.SettingsSectionButton>
            </S.OriginalViewWrapperTextContent>
            <S.OriginalViewImageWrapper>
              <Image src={originalGmail} alt={'original gmail view'} />
            </S.OriginalViewImageWrapper>
          </S.OriginalViewWrapper>
        </S.SettingsSectionItem>
        <S.SettingsSectionItem>
          <S.InterfaceItemWrapper>
            <S.SectionTitle>{t.settingsDensity}</S.SectionTitle>
            <S.RadioGroupWrapper>
              <FormControlLabel
                control={<S.Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>
                      {t.settingsDestinyDefault}
                    </S.SettingsItemText>
                    <Image
                      src={defaultInterfaceImage}
                      alt={'default interface'}
                    />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<S.Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>
                      {t.settingsDestinyComfortable}
                    </S.SettingsItemText>
                    <Image
                      src={normalInterfaceImage}
                      alt={'comfortable interface'}
                    />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<S.Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>
                      {t.settingsDestinyCompact}
                    </S.SettingsItemText>
                    <Image
                      src={compactInterfaceImage}
                      alt={'compact interface'}
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
              <S.SectionTitle>{t.settingsTheme}</S.SectionTitle>
              <S.SettingsSectionButton variant={'outlined'}>
                {t.settingsThemeViewAll}
              </S.SettingsSectionButton>
            </S.ThemeTitleWrapper>
            <S.ThemeImageWrapper>
              <Image src={themeImage} alt={'theme'} />
            </S.ThemeImageWrapper>
          </S.ThemeItemWrapper>
        </S.SettingsSectionItem>
        <S.SettingsSectionItem>
          <S.DefaultViewItemWrapper>
            <S.SectionTitle>{t.settingsInboxType}</S.SectionTitle>
            <S.RadioGroupWrapper>
              <FormControlLabel
                control={<S.Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemRadioLabelWrapper>
                      <S.SettingsItemText>
                        {t.settingsInboxTypeDefault}
                      </S.SettingsItemText>
                      <S.SettingsLabelButton variant={'outlined'}>
                        {t.settingsInboxTypeCustomize}
                      </S.SettingsLabelButton>
                    </S.SettingsItemRadioLabelWrapper>
                    <Image src={defaultViewImage} alt={'Default view'} />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<S.Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>
                      {t.settingsInboxTypeImportant}
                    </S.SettingsItemText>
                    <Image src={importantViewImage} alt={'important first'} />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<S.Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>
                      {t.settingsInboxTypeUnread}
                    </S.SettingsItemText>
                    <Image src={unreadViewImage} alt={'unread first'} />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<S.Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>
                      {t.settingsInboxTypeStarred}
                    </S.SettingsItemText>
                    <Image src={starredViewImage} alt={'starred first'} />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<S.Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemRadioLabelWrapper>
                      <S.SettingsItemText>
                        {t.settingsInboxTypePriority}
                      </S.SettingsItemText>
                      <S.SettingsLabelButton variant={'outlined'}>
                        {t.settingsInboxTypeCustomize}
                      </S.SettingsLabelButton>
                    </S.SettingsItemRadioLabelWrapper>
                    <Image src={priorityViewImage} alt={'priority'} />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<S.Radio size={'small'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemRadioLabelWrapper>
                      <S.SettingsItemText>
                        {t.settingsInboxTypeMultiple}
                      </S.SettingsItemText>
                      <S.SettingsLabelButton variant={'outlined'}>
                        {t.settingsInboxTypeCustomize}
                      </S.SettingsLabelButton>
                    </S.SettingsItemRadioLabelWrapper>
                    <Image src={multipleViewImage} alt={'Multiple Inboxes'} />
                  </S.SettingsLabelItem>
                }
              />
            </S.RadioGroupWrapper>
          </S.DefaultViewItemWrapper>
        </S.SettingsSectionItem>
        <S.SettingsSectionItem>
          <S.DefaultViewItemWrapper>
            <S.SectionTitle>{t.settingsReadingPane}</S.SectionTitle>
            <S.RadioGroupWrapper value={split} onChange={changeHandler}>
              <FormControlLabel
                control={<S.Radio size={'small'} value={'noSplit'} />}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>
                      {t.settingsReadingPaneNoSplit}
                    </S.SettingsItemText>
                    <Image src={defaultViewAreaImage} alt={'no split'} />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<S.Radio size={'small'} />}
                value={'splitRight'}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>
                      {t.settingsReadingPaneRight}
                    </S.SettingsItemText>
                    <Image
                      src={previewPanelRightImage}
                      alt={'right of inbox'}
                    />
                  </S.SettingsLabelItem>
                }
              />
              <FormControlLabel
                control={<S.Radio size={'small'} />}
                value={'splitBottom'}
                label={
                  <S.SettingsLabelItem>
                    <S.SettingsItemText>
                      {t.settingsReadingPaneBelow}
                    </S.SettingsItemText>
                    <Image
                      src={previewPanelBottomImage}
                      alt={'below of inbox'}
                    />
                  </S.SettingsLabelItem>
                }
              />
            </S.RadioGroupWrapper>
          </S.DefaultViewItemWrapper>
        </S.SettingsSectionItem>
        <S.SettingsSectionItem>
          <S.DefaultViewItemWrapper>
            <S.SectionTitle>{t.settingsEmailThreading}</S.SectionTitle>
            <S.ConcatMailsContent>
              <S.ConversationCheckbox size={'small'} />
              <S.ConcatMailsContentText>
                {t.settingsConversationView}
              </S.ConcatMailsContentText>
              <Tooltip title={t.settingsSupportTooltip} placement={'top'}>
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
