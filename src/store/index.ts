import { configureStore } from '@reduxjs/toolkit';

import messagerieReducer from './reducers/messagerie';
import settingsReducer from './reducers/settings';

const store = configureStore({
  reducer: {
    messagerie: messagerieReducer,
    settings: settingsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
