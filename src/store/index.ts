import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducers';

const store2 = configureStore({
  reducer,
});

export default store2;

export type RootState = ReturnType<typeof store2.getState>;
export type AppDispatch = typeof store2.dispatch;
