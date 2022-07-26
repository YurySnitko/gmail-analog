import { createSlice } from '@reduxjs/toolkit';

interface FilterValuesState {
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

const initialState: FilterValuesState = {
  address: '',
  date: null,
  datePeriod: '1 день',
  isAttachedFiles: false,
  noWords: '',
  searchedWords: '',
  searchingPlace: 'Вся почта',
  sender: '',
  size: 'больше',
  sizeUnit: 'МБ',
  sizeValue: '',
  topic: '',
};

export const filterValuesSlice = createSlice({
  name: 'filterValues',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.date = action.payload.date;
      state.address = action.payload.address;
      state.datePeriod = action.payload.datePeriod;
      state.isAttachedFiles = action.payload.isAttachedFiles;
      state.noWords = action.payload.noWords;
      state.searchedWords = action.payload.searchedWords;
      state.searchingPlace = action.payload.searchingPlace;
      state.sender = action.payload.sender;
      state.size = action.payload.size;
      state.sizeUnit = action.payload.sizeUnit;
      state.sizeValue = action.payload.sizeValue;
      state.topic = action.payload.topic;
    },
  },
});

export default filterValuesSlice.reducer;
export const { addData } = filterValuesSlice.actions;
