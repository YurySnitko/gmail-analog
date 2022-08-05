import { SelectChangeEvent } from '@mui/material';

export interface LocalizationSelectProps {
  children: React.ReactNode;
  value: string;
  onChange: (event: SelectChangeEvent<unknown>) => void;
}
