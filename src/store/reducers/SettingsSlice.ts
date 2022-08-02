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
    },
  },
});

export default settingsSlice.reducer;
export const { changeSplit } = settingsSlice.actions;
