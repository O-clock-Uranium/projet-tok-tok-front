import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import { Advert } from '../../@types';

import axiosInstance2 from '../../utils/axios copy';

interface AdvertsState {
  list: Advert[];
  favourites: Advert[];
  isLoading: boolean;
}

export const initialState: AdvertsState = {
  list: [],
  favourites: [],
  isLoading: false,
};

export const setLoading = createAction<boolean>('adverts/setLoading');

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async () => {
    const { data } = await axiosInstance2.get<Advert[]>('/adverts');
    return data as Advert[];
  }
);

export const addAdvert = createAsyncThunk(
  'adverts/addAdvert',
  async (formData: FormData) => {
    // try {
    const { data } = await axiosInstance2.post('/adverts', formData);
    return data as Advert[];
    // } catch (error) {
    // }
  }
);

export const fetchFavourites = createAsyncThunk(
  'adverts/fetchFavourites',
  async () => {
    const { data } = await axiosInstance2.get('/favourites');
    return data as Advert[];
  }
);

const advertsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(fetchAdverts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchAdverts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchFavourites.fulfilled, (state, action) => {
      state.favourites = action.payload;
    })
    .addCase(addAdvert.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addAdvert.fulfilled, (state) => {
      state.isLoading = false;
    });
});

export default advertsReducer;
