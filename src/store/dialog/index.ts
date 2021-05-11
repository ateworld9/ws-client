import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from 'types';

interface IDialogState {
  messages: Array<IMessage>;
}

const initialState: IDialogState = {
  messages: [],
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    addMessage: (state: IDialogState, { payload }: PayloadAction<IMessage>) => {
      state.messages = [...state.messages, payload];
    },
  },
});

export const { addMessage } = dialogSlice.actions;

export const dialogReducer = dialogSlice.reducer;
