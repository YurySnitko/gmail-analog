import { styled } from '@mui/material/styles';
import { Button, Grid } from '@mui/material';

export const S = {
  SettingsSectionWrapper: styled(Grid)`
    width: 300px;
    border-left: 1px solid ${({ theme }): string => theme.palette.divider};
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
  `,

  SettingsSectionHeader: styled(Grid)`
    border-bottom: 1px solid ${({ theme }): string => theme.palette.divider};
    padding: 1rem;
    width: 100%;
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
};
