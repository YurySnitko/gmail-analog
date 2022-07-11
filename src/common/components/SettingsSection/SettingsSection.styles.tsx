import { styled } from '@mui/material/styles';
import { Button, Grid, RadioGroup, Typography } from '@mui/material';

export const S = {
  SettingsSectionWrapper: styled(Grid)`
    position: relative;
    width: 300px;
    border-left: 1px solid ${({ theme }): string => theme.palette.divider};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
  `,

  SettingsSectionHeader: styled(Grid)`
    position: fixed;
    border-bottom: 1px solid ${({ theme }): string => theme.palette.divider};
    padding: 1rem 0 1rem 1rem;
    width: 291px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
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
    border: 1px solid ${({ theme }): string => theme.palette.grey.A400};

    &:hover {
      border: 1px solid ${({ theme }): string => theme.palette.grey.A400};
    }
  `,

  SettingsSectionContent: styled(Grid)`
    width: 97%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    margin-top: 117px;

    &::-webkit-scrollbar {
      width: 7px;
      background-color: #f9f9fd;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #223c50;
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

  TryNewViewButton: styled(Button)`
    background-color: ${({ theme }): string => theme.palette.common.white};
    border: none;
    text-transform: none;
    font-weight: 500;
    font-size: 0.875rem;
    text-align: start;
    letter-spacing: 0.25px;
    line-height: 1.3rem;
    padding: 0 0 0 12px;

    &:hover {
      border: none;
      background-color: ${({ theme }): string =>
        theme.palette.background.TryNewViewButtonHover};
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

  InterfaceTitle: styled(Typography)`
    font-size: 0.6875rem;
    font-weight: 500;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  `,

  InterfaceItemContentWrapper: styled(RadioGroup)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,

  InterfaceItemText: styled(Typography)`
    font-size: 0.875rem;
  `,

  InterfaceItemContentItem: styled(Grid)`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
    gap: 1.7rem;
  `,

  ThemeItemWrapper: styled(Grid)`
    display: flex;
    flex-direction: column;
  `,
};
