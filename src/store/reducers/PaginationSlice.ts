import { createSlice } from '@reduxjs/toolkit';

interface PaginationState {
  currentPage: number;
  pageSize: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  pageSize: 10,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },

    prevPage: (state) => {
      state.currentPage -= 1;
    },

    changePageSize: (state, action) => {
      state.pageSize = action.payload;
    },
  },
});

export default paginationSlice.reducer;
export const { nextPage, prevPage, changePageSize } = paginationSlice.actions;
