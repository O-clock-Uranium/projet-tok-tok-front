import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';

import axiosInstance from '../../utils/axios';

interface UserState {
  logged: boolean;
  id: number;
  firstname: string;
  lastname: string;
  description: string;
  address: string;
  city: string;
  longitude: string;
  latitude: string;
  thumbnail: string;
  slug: string;

  error?: string;
  isLoading: boolean;
}

export const initialState: UserState = {
  id: 0,
  logged: false,
  firstname: '',
  lastname: '',
  description: '',
  address: '',
  city: '',
  longitude: '',
  latitude: '',
  thumbnail: '',
  slug: '',
  error: '',
  isLoading: false,
};

export const logout = createAction('user/logout');

export const login = createAsyncThunk(
  'user/login',
  async (formData: FormData) => {
    try {
      const objData = Object.fromEntries(formData);

      const { data } = await axiosInstance.post('/login', objData);

      axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      delete data.token;

      return data as {
        auth: boolean;
        token: string;
        user: UserState;
        error: string;
      };
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const signup = createAsyncThunk(
  'user/signup',
  async (formData: FormData) => {
    try {
      const objData = Object.fromEntries(formData);

      const { data } = await axiosInstance.post('/signup', objData);
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      delete data.token;

      return data as {
        message: string;
        auth: boolean;
        token: string;
        user: UserState;
      };
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.logged = true;
      state.id = action.payload.user.id;
      state.firstname = action.payload.user.firstname;
      state.lastname = action.payload.user.lastname;
      state.address = action.payload.user.address;
      state.thumbnail = action.payload.user.thumbnail;
      state.city = action.payload.user.city;
      state.latitude = action.payload.user.latitude;
      state.longitude = action.payload.user.longitude;
      state.slug = action.payload.user.slug;
      state.description = action.payload.user.description;
    })
    .addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })
    .addCase(logout, (state) => {
      state.logged = initialState.logged;
      // state = { ...initialState };
      // console.log(state.logged);
      delete axiosInstance.defaults.headers.common.Authorization;
    })
    .addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.logged = true;
      state.id = action.payload.user.id;
      state.firstname = action.payload.user.firstname;
      state.lastname = action.payload.user.lastname;
      state.address = action.payload.user.address;
      state.thumbnail = action.payload.user.thumbnail;
      state.city = action.payload.user.city;
      state.latitude = action.payload.user.latitude;
      state.longitude = action.payload.user.longitude;
      state.slug = action.payload.user.slug;
      state.description = action.payload.user.description;
    })
    .addCase(signup.pending, (state) => {
      state.isLoading = false;
    })
    .addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
});

export default userReducer;
