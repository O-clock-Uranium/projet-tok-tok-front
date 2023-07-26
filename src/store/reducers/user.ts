import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';

import axiosInstance from '../../utils/axios';

// ? Est-ce qu'on ferait pas une interface Login {loggued, ?error, ?message, user: UserInterface}

// id: user.id,
// firstname: user.firstname,
// lastname: user.lastname,
// address: user.address,
// city: user.city,
// longitude: user.longitude,
// latitude: user.latitude,
// thumbnail: user.thumbnail,
// slug:

interface UserState {
  logged: boolean;
  firstname: string | null;
  lastname: string | null;
  description: string | null;
  address: string | null;
  city: string | null;
  longitude: string | null;
  latitude: string | null;
  // email: string | null;
  // password: string | null;
  thumbnail: string | null;
  slug: string | null;

  error?: string | null;
}

export const initialState: UserState = {
  logged: false,
  firstname: null,
  lastname: null,
  description: null,
  address: null,
  city: null,
  longitude: null,
  latitude: null,
  // email: null,
  // password: null,
  thumbnail: null,
  slug: null,
  error: null,
};

export const logout = createAction('user/logout');

export const login = createAsyncThunk(
  'user/login',
  async (formData: FormData) => {
    const objData = Object.fromEntries(formData);

    const { data } = await axiosInstance.post('/login', objData);

    axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    delete data.token;

    return data as {
      auth: boolean;
      token: string;
      user: UserState;
      // logged: boolean;
      // firstname: string;
      // lastname: string;
      // description: string;
      // address: string;
      // city: string;
      // longitude: string;
      // latitude: string;
      // thumbnail: string;
      // slug: null;
      // error: null;
    };
  }
);

export const signup = createAsyncThunk(
  'user/signup',
  async (formData: FormData) => {
    const objData = Object.fromEntries(formData);

    const { data } = await axiosInstance.post('/signup', objData);
    // console.log(data);
    // console.log(data.token);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    delete data.token;

    //! Mettre une photo de base automatique par défaut

    return data as {
      logged: boolean;
      firstname: string;
      lastname: string;
      description: string;
      address: string;
      city: string;
      longitude: string;
      latitude: string;
      thumbnail: string;
      slug: null;
      error: null;
    };
  }
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.pending, (state, action) => {
      // state.isLoading = true;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.logged = action.payload.auth;
      // state.isLoading = false;
    })
    .addCase(login.rejected, (state, action) => {
      // state.isLoading = false;
      // console.log(action.error);
      // state.error = action.error.message;
      // console.log(action);
      // l'erreur est envoyée dans `action.error`
      // je pourrais en profiter pour mettre en place un message d'erreur
      // console.log(action.error);
    })
    .addCase(logout, (state) => {
      state.logged = false;
      // ... state = ... initialState; //! Comment qu'on fait ?
      // console.log(state.logged);
      delete axiosInstance.defaults.headers.common.Authorization;
    })
    .addCase(signup.fulfilled, (state, action) => {
      state.logged = true;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.address = action.payload.address;
      state.thumbnail = action.payload.thumbnail; //! ajouter une thumbnail de base
    });
});

export default userReducer;
