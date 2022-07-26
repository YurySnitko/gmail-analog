import React from 'react';
import { SelectChangeEvent } from '@mui/material';

export interface FilterSelectProps {
  defaultValue: string;
  children: React.ReactNode;
  changeHandler: (event: SelectChangeEvent<unknown>) => void;
}
