import { styled } from '@mui/material/styles';
import { Button, Grid } from '@mui/material';

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
    padding: 1rem 0 1rem 1rem;
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
    border-bottom: 1px solid ${({ theme }): string => theme.palette.divider};
  `,

  OriginalViewWrapper: styled(Grid)`
    display: flex;
    align-items: center;
  `,

  OriginalViewWrapperTextContent: styled(Grid)``,
};
