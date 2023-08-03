import {
  createAction,
  createAsyncThunk,
  createReducer
} from '@reduxjs/toolkit';

import axiosInstance from '../../utils/axios';

interface UserState {
  logged: boolean;
  token: string;
  id: number;
  banner: string;
  firstname: string;
  lastname: string;
  description: string;
  address: string;
  city: string;
  longitude: string;
  latitude: string;
  thumbnail: string;
  slug: string;
  email: string;
  banner: string;

  error?: string;
  isLoading: boolean;
}

export const initialState: UserState = {
  logged: false,
  token: '',
  id: 0,
  banner: '',
  firstname: '',
  lastname: '',
  description: '',
  address: '',
  city: '',
  longitude: '',
  latitude: '',
  thumbnail: '',
  slug: '',
  email: '',
  banner: '',
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
      return data as {
        message: string;
        auth: boolean;
        token: string;
        user: UserState;
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      return data as {
        message: string;
        auth: boolean;
        token: string;
        user: UserState;
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const edit = createAsyncThunk(
  'user/edit',
  async (formData: FormData) => {
    try {
      const { data } = await axiosInstance.patch('/my-profile/edit', formData);
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const editBanner = createAsyncThunk(
  'user/editBanner',
  async (formData: FormData) => {
    try {
      const { data } = await axiosInstance.patch(
        '/my-profile/edit-banner',
        formData
      );
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = initialState.error;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.logged = true;
      state.id = action.payload.user.id;
      state.banner = action.payload.user.banner;
      state.firstname = action.payload.user.firstname;
      state.lastname = action.payload.user.lastname;
      state.address = action.payload.user.address;
      state.thumbnail = action.payload.user.thumbnail;
      state.city = action.payload.user.city;
      state.latitude = action.payload.user.latitude;
      state.longitude = action.payload.user.longitude;
      state.slug = action.payload.user.slug;
      state.description = action.payload.user.description;
      state.email = action.payload.user.email;
      state.banner = action.payload.user.banner;
    })
    .addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })
    .addCase(logout, (state) => {
      state.logged = false;
      state.token = '';
      state.id = initialState.id;
      state.error = initialState.error;
      state.firstname = initialState.firstname;
      state.lastname = initialState.lastname;
      state.address = initialState.address;
      state.thumbnail = initialState.thumbnail;
      state.city = initialState.city;
      state.latitude = initialState.latitude;
      state.longitude = initialState.longitude;
      state.slug = initialState.slug;
      state.description = initialState.description;
      state.email = initialState.email;
      localStorage.removeItem('persist:root');
    })
    .addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
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
      state.email = action.payload.user.email;
      state.banner = action.payload.user.banner;
    })
    .addCase(signup.pending, (state) => {
      state.isLoading = false;
      state.error = initialState.error;
    })
    .addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })
    .addCase(edit.fulfilled, (state, action) => {
      state.isLoading = false;
      state.id = action.payload.id;
      state.banner = action.payload.banner;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.address = action.payload.address;
      state.thumbnail = action.payload.thumbnail;
      state.city = action.payload.city;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.slug = action.payload.slug;
      state.description = action.payload.description;
    })
    .addCase(editBanner.fulfilled, (state, action) => {
      state.banner = action.payload.banner;
      console.log('bruce', action.payload);
      console.log('banner', state.banner);
    })
    .addCase(edit.pending, (state) => {
      state.isLoading = false;
      state.error = initialState.error;
    })
    .addCase(edit.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
});

export default userReducer;
