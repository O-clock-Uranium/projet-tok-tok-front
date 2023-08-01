import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import { Message } from '../../@types';

import axiosInstance from '../../utils/axios';

interface MessagerieState {
  messages: Message[];
}

const initialState: MessagerieState = {
  messages: [],
};

export const sendMessage = createAsyncThunk(
  'chat/send-message',
  async (formData: FormData) => {
    try {
      const objData = Object.fromEntries(formData);
      const { data } = await axiosInstance.post('/messages', objData);

      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const addMessage = createAction<Message>('chat/add-message');

//export const fetchConversations

export const fetchMessages = createAsyncThunk(
  'chat/fetch-messages',
  async (roomId) => {
    try {
      const { data } = await axiosInstance.get(`/messages/${roomId}`);
      return data;
    } catch (error) {}
  }
);

const messagerieReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addMessage, (state, action) => {
      state.messages.push(action.payload);
    })
    .addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
});

export default messagerieReducer;
