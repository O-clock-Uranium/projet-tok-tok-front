import { configureStore } from '@reduxjs/toolkit';

import messagerieReducer from './reducers/messagerie';
import userReducer from './reducers/user';

const store = configureStore({
  reducer: {
    messagerie: messagerieReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
