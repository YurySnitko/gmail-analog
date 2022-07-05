import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mail } from '../../../consts/mails';

interface MailState {
  mails: Mail[];
  isLoading: boolean;
  error: string;
}

const initialState: MailState = {
  mails: [],
  isLoading: false,
  error: '',
};

export const mailsSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    addMail(state, action: PayloadAction<Mail>) {
      state.mails = [...state.mails, action.payload];
    },
  },
});

export default mailsSlice.reducer;
export const { addMail } = mailsSlice.actions;
