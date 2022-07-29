export interface HeaderFilterProps {
  setIsFilterForm: (flag: boolean) => void;
  searchedValue: string;
}

export interface FilterValues {
  sender: string;
  address: string;
  topic: string;
  searchedWords: string;
  noWords: string;
  size: string;
  sizeUnit: string;
  datePeriod: string;
  date: Date | null;
  searchingPlace: string;
  isAttachedFiles: boolean;
  sizeValue: string;
}
