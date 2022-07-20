import { createSlice } from '@reduxjs/toolkit';
import { MailData } from '../../mocked/mails';

interface MailState {
  mails: MailData[];
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
