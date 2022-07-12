import { ReactNode } from 'react';

export interface AsideProps {
  isOpen: boolean;
}

export interface AsideStylesProps {
  isOpen: boolean;
  children: ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
