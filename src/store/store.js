import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import advertsReducer from './reducers/adverts';
import messagerieReducer from './reducers/messagerie';
import profileReducer from './reducers/profile';
import publicationsReducer from './reducers/publications';
import userReducer from './reducers/user';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['messagerie'],
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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
