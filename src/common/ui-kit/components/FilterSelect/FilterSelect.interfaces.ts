import React from 'react';
import { SelectChangeEvent } from '@mui/material';

export interface FilterSelectProps {
  children: React.ReactNode;
  changeHandler: (event: SelectChangeEvent<unknown>) => void;
  value: string;
}