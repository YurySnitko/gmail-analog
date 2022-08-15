import { createSlice } from '@reduxjs/toolkit';

type Theme = 'dark' | 'light';

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
