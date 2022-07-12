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
  onClick: () => void;
}

export interface MailListItemProps {
  id: string;
  senderName: string;
  title: string;
  text: string;
  date: string;
  isViewed: boolean;
  onMailListItemClick: (mailId: string) => void;
  isChecked: boolean;
  checkboxCheckHandler: (isChecked: boolean, id: string) => void;
}

export enum MailListItemGridBackgroundEnum {
  checked,
  viewed,
  normal,
}
