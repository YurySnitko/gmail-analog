import React from "react";

export interface MessageTextProps {
  isViewed?: boolean;
  children: React.ReactNode;
}

export interface MailListItemGridProps {
  isViewed: boolean;
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
}
