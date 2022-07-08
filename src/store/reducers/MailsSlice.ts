import { createSlice } from '@reduxjs/toolkit';
import { Mail } from '../../../consts/mails';

interface MailState {
  mails: Mail[];
  isLoading: boolean;
}

const initialState: MailState = {
  mails: [],
  isLoading: false,
};

export const mailsSlice = createSlice({
  name: 'mails',
  initialState,
  reducers: {
    getMailsFetch: (state) => {
      state.isLoading = true;
    },

    getMailsSuccess: (state, action) => {
      state.mails = action.payload;
      state.isLoading = false;
    },

    getMailsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export default mailsSlice.reducer;
export const { getMailsFetch, getMailsFailure, getMailsSuccess } =
  mailsSlice.actions;
