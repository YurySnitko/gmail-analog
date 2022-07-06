export interface MailListHeaderProps {
  selectedMailsIds: string[];
  setSelectedMailsIds: (ids: string[]) => void;
  currentPage: number;
  setCurrentPage: (number: number) => void;
}
