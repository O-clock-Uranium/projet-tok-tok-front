import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';

import axiosInstance from '../../utils/axios';

interface UserState {
  logged: boolean;
  token: string;
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
  email: string;

  error?: string;
  isLoading: boolean;
}

export const initialState: UserState = {
  logged: false,
  token: '',
  id: 0,
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
      console.log(data.token)
      // delete data.token;

      return data;
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
      // delete data.token;

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

// export const fetchProfile = (id: number) => createAsyncThunk(
//   'user/fetchProfile',
//   async () => {
//     try {
//       const { data } = await axiosInstance.get(`/profile/${id}`);
//       console.log(data);

//       return data;

//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       throw new Error(error.response.data.error);
//     }
//   }
// );

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
      state.email = action.payload.user.email;
      state.token = action.payload.token;
    })
    .addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })
    .addCase(logout, (state) => {
      state.logged = false;
      state.token = '';
      state.error = initialState.error
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
      state.email = action.payload.user.email;
    })
    .addCase(signup.pending, (state) => {
      state.isLoading = false;
    })
    .addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })
    .addCase(edit.fulfilled, (state, action) => {
      state.isLoading = false;
      state.id = action.payload.id;
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
    .addCase(edit.pending, (state) => {
      state.isLoading = false;
    })
    .addCase(edit.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
});

export default userReducer;
