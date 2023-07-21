import { createAction, createReducer } from '@reduxjs/toolkit';
import { Message } from '../../@types';

interface MessagerieState {
  messages: Message[];
}

const initialState: MessagerieState = {
  messages: [],
};

export const addMessage = createAction<Message>('chat/message-add');

const messagerieReducer = createReducer(initialState, (builder) => {
  builder.addCase(addMessage, (state, action) => {
    state.messages.push(action.payload);
  });
});

export default messagerieReducer;
