import { styled } from '@mui/material/styles';
import { Button, Grid, RadioGroup, Typography } from '@mui/material';

export const S = {
  SettingsSectionWrapper: styled(Grid)`
    position: relative;
    height: 100%;
    width: 300px;
    border-left: 1px solid ${({ theme }): string => theme.palette.divider};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
  `,

  SettingsSectionHeader: styled(Grid)`
    border-bottom: 1px solid ${({ theme }): string => theme.palette.divider};
    padding: 1rem 0 1rem 1rem;
    width: 291px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    background-color: ${({ theme }): string => theme.palette.common.white};
  `,

  SettingsSectionHeaderBarWrapper: styled(Grid)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  AllSettingsButton: styled(Button)`
    width: 100%;
    text-transform: none;
    font-weight: 600;
    font-size: 0.875rem;
    color: ${({ theme }): string => theme.palette.primary.light};
    box-shadow: none;
    border: 1px solid
      ${({ theme }): string => theme.palette.background.settingsButtonBorder};

    &:hover {
      box-shadow: none;
      border: 1px solid
        ${({ theme }): string => theme.palette.background.settingsButtonBorder};
    }
  `,

  SettingsSectionContent: styled(Grid)`
    height: 100%;
    width: 97%;
    display: flex;
    flex-basis: auto;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    padding-right: 7px;

    &::-webkit-scrollbar {
      width: 9px;
      background-color: ${({ theme }): string => theme.palette.common.white};
    }

    &::-webkit-scrollbar:hover {
      width: 10px;
      background-color: ${({ theme }): string => theme.palette.grey.A100};
      border: 1px solid ${({ theme }): string => theme.palette.grey.A400};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }): string =>
        theme.palette.background.scrollBarThumb};
      border-left: 1px solid ${({ theme }): string => theme.palette.grey.A400};
      border-top: 1px solid ${({ theme }): string => theme.palette.grey.A400};
      border-bottom: 1px solid ${({ theme }): string => theme.palette.grey.A400};
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }): string =>
        theme.palette.background.scrollBarThumbHover};
    }
  `,

  SettingsSectionItem: styled(Grid)`
    width: 100%;
    padding: 1rem 0 1rem 1rem;
    border-bottom: 1px solid ${({ theme }): string => theme.palette.divider};
  `,

  OriginalViewWrapper: styled(Grid)`
    display: flex;
    align-items: center;
  `,

  OriginalViewWrapperTextContent: styled(Grid)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    width: 50%;
  `,

  SettingsSectionButton: styled(Button)`
    background-color: ${({ theme }): string => theme.palette.common.white};
    border: none;
    color: ${({ theme }): string => theme.palette.primary.light};
    box-shadow: none;
    text-transform: none;
    font-weight: 600;
    font-size: 0.875rem;
    text-align: start;
    letter-spacing: 0.25px;
    line-height: 1.3rem;
    padding: 0 0 0 12px;

    &:hover {
      border: none;
      box-shadow: none;
      background-color: ${({ theme }): string =>
        theme.palette.background.tryNewViewButtonHover};
    }
  `,

  OriginalGmailText: styled(Typography)`
    font-size: 0.875rem;
    line-height: 1.2rem;
  `,

  OriginalViewImageWrapper: styled(Grid)`
    width: 50%;
    display: flex;
    justify-content: center;
  `,

  InterfaceItemWrapper: styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  `,

  SettingsItemRadioLabelWrapper: styled(Grid)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,

  SettingsLabelButton: styled(Button)`
    padding: 0;
    background-color: ${({ theme }): string => theme.palette.common.white};
    border: none;
    box-shadow: none;
    text-transform: none;
    font-size: 0.875rem;
    letter-spacing: 0.25px;
    width: 60%;
    font-weight: 600;
    color: ${({ theme }): string => theme.palette.primary.light};
    margin-left: -3px;

    &:hover {
      border: none;
      box-shadow: none;
      background-color: ${({ theme }): string =>
        theme.palette.background.tryNewViewButtonHover};
    }
  `,

  SectionTitle: styled(Typography)`
    font-size: 0.6875rem;
    font-weight: 500;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  `,

  RadioGroupWrapper: styled(RadioGroup)`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `,

  SettingsItemText: styled(Typography)`
    font-size: 0.875rem;
    word-break: break-word;
    width: 130px;
  `,

  SettingsLabelItem: styled(Grid)`
    display: grid;
    grid-template-columns: 1fr 72px;
    gap: 0.3rem;
    align-items: center;
  `,

  ThemeItemWrapper: styled(Grid)`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  `,

  ThemeTitleWrapper: styled(Grid)`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  ThemeImageWrapper: styled(Grid)`
    width: 54px;
    height: 36px;
    border: 2px solid ${({ theme }): string => theme.palette.primary.main};
    border-radius: 4px;
  `,

  DefaultViewItemWrapper: styled(Grid)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,

  ConcatMailsContent: styled(Grid)`
    display: flex;
    align-items: center;
    gap: 10px;
  `,

  ConcatMailsContentText: styled(Typography)`
    font-size: 0.875rem;
  `,
};
