import React from 'react';

export interface ButtonProps {
  onClick?: () => void;
  isOpen: boolean;
}

export interface WriteButtonWrapperProps {
  isOpen?: boolean;
  children: React.ReactNode;
}
