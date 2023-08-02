import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import { ContactUser, Message } from '../../@types';

import axiosInstance from '../../utils/axios';

interface MessagerieState {
  messages: Message[];
  currentDestinataire: ContactUser;
  currentRoom: number;
}

const initialState: MessagerieState = {
  // la liste des messages de la conversation qu'on consulte
  messages: [],
  currentDestinataire: {
    id: 0,
    firstname: '',
    lastname: '',
    room_id: 0
  },
  currentRoom: 0,
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

export const fetchConversations = createAsyncThunk(
  'chat/fetch-conversations',
  async () => {
    try {
      const { data } = await axiosInstance.get('/conversations');
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
    });
});

export default messagerieReducer;
