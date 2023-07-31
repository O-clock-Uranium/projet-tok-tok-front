import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import advertsReducer from './reducers/adverts';
import messagerieReducer from './reducers/messagerie';
import publicationsReducer from './reducers/publications';
import userReducer from './reducers/user';
import profileReducer from './reducers/profile';

const persistConfig = {
  key: 'root',
  // version: 1,
  storage,
};

const reducer = combineReducers({
  messagerie: messagerieReducer,
  user: userReducer,
  adverts: advertsReducer,
  publications: publicationsReducer,
  profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  applyMiddleware: applyMiddleware(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
