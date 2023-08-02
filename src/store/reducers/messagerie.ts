import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import { ContactUser, Message } from '../../@types';

import axiosInstance from '../../utils/axios';

interface MessagerieState {
  messages: Message[];
  contacts: ContactUser[];
}

const initialState: MessagerieState = {
  // la liste des messages de la conversation qu'on consulte
  messages: [],
  contacts: [],
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

export const fetchContacts = createAsyncThunk(
  'chat/fetch-contacts',
  async () => {
    try {
      const { data } = await axiosInstance.get('/contacts');
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const fetchMessages = createAsyncThunk(
  'chat/fetch-messages',
  async (room: number) => {
    try {
      const { data } = await axiosInstance.get(`/messages/${room}`);
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

const messagerieReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addMessage, (state, action) => {
      state.messages.push(action.payload);
    })
    .addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
    });
});

export default messagerieReducer;
