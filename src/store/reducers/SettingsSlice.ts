import { createSlice } from '@reduxjs/toolkit';

interface SettingsState {
  split: string;
}

const initialState: SettingsState = {
  split: 'noSplit',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeSplit: (state, action) => {
      state.split = action.payload;
      localStorage.setItem('split', action.payload);
    },
    getSplit: (state) => {
      let storageSplit = localStorage.getItem('split');
      state.split = storageSplit ? storageSplit : 'noSplit';
    },
  },
});

export default settingsSlice.reducer;
export const { changeSplit, getSplit } = settingsSlice.actions;
