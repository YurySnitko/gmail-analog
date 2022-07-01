import React from 'react';

export interface MessageTextProps {
  isViewed?: boolean;
  children: React.ReactNode;
}

export interface MailListItemGridProps {
  background: MailListItemGridBackgroundEnum;
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export interface MailListItemProps {
  id: string;
  sender: string;
  title: string;
  text: string;
  date: string;
  isViewed: boolean;
  isChecked: boolean;
  selectedMailsIds: string[];
  setSelectedMailsIds: (ids: string[]) => void;
}

export enum MailListItemGridBackgroundEnum {
  checked,
  viewed,
  normal,
}
