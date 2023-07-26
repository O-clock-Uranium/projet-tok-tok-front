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
}

export const initialState: UserState = {
  logged: false,
  firstname: "",
  lastname: "",
  description: "",
  address: "",
  city: "",
  longitude: "",
  latitude: "",
  thumbnail: "",
  slug: "",
  error: "",
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
      message: string;
      auth: boolean;
      token: string;
      user: UserState;
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
      state.firstname = action.payload.user.firstname;
      state.lastname = action.payload.user.lastname;
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
      state.logged = initialState.logged;
      // state = { ...initialState };
      // console.log(state.logged);
      delete axiosInstance.defaults.headers.common.Authorization;
    })
    .addCase(signup.fulfilled, (state, action) => {
      state.logged = true;
      state.firstname = action.payload.user.firstname;
      state.lastname = action.payload.user.lastname;
      state.address = action.payload.user.address;
      state.thumbnail = action.payload.user.thumbnail; //! ajouter une thumbnail de base
    });
});

export default userReducer;
