import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';

import axiosInstance from '../../utils/axios';

interface UIState {
  loading: boolean;
  error: string | null;
  snack: string | null;
}

export const initialState: UIState = {
  loading: false,
  error: null,
  snack: null,
};

const uiReducer = createReducer(initialState, (builder) => {});

export default uiReducer;
