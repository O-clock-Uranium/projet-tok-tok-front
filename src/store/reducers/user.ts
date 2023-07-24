import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';

import axiosInstance from '../../utils/axios';

interface UserState {
  logged: boolean;
  firstname: string | null;
  lastname: string | null;
  description: string | null;
  address: string | null;
  localization: string | null;
  email: string | null;
  password: string | null;
  confirmation: string | null;
  thumbnail: string | null;
  error: string | null;
  // flash: Flash | null;
  // loading: boolean;
}

export const initialState: UserState = {
  logged: false,
  firstname: null,
  lastname: null,
  description: null,
  address: null,
  localization: null,
  email: null,
  password: null,
  confirmation: null,
  thumbnail: null,
  error: null,
  // flash: null,
  // loading: null,
};

// Action pour la déconnexion
export const logout = createAction('user/logout');

// Thunk pour la connexion
export const login = createAsyncThunk(
  'user/login',
  async (formData: FormData) => {
    const objData = Object.fromEntries(formData);

    const { data } = await axiosInstance.post('/login', objData);
    // après m'être connecté, j'ajoute mon token directement dans l'instance Axios
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    // le token est utilisé ci-dessus, je n'en ai plus besoin
    // je le supprime de mes données
    delete data.token;

    return data as {
      logged: boolean;
      firstname: string;
      lastname: string;
      description: string;
      address: string;
      localization: string;
      email: string;
      password: string;
      confirmation: string;
      thumbnail: string;
      // logged: boolean;
    };
  }
);

// Thunk pour l'inscription
export const signup = createAsyncThunk(
  'user/signup',
  async (formData: FormData) => {
    const objData = Object.fromEntries(formData);

    const { data } = await axiosInstance.post('/signup', objData);
    // après m'être connecté, j'ajoute mon token directement dans l'instance Axios
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    // le token est utilisé ci-dessus, je n'en ai plus besoin
    // je le supprime de mes données
    delete data.token;

    //! Mettre une photo de base automatique par défaut
    //! String vide pour description

    return data as {
      logged: boolean;
      firstname: string;
      lastname: string;
      description: string;
      address: string;
      localization: string;
      email: string;
      password: string;
      confirmation: string;
      thumbnail: string;
    };
  }
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.pending, (state) => {
      // state.loading = true;
      // state.error = null;
    })
    .addCase(login.fulfilled, (state, action) => {
      // state.logged = action.payload.logged;
      state.logged = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
      console.log(state.logged);
      // state.loading = false;
      // state.flash = {
      //   type: 'success',
      //   children: `Bienvenue ${action.payload.pseudo} !`,
      // };
    })
    .addCase(login.rejected, (state, action) => {
      // state.loading = false;
      // console.log(action.error);
      // state.error = action.error.message;
      // console.log(action);
      // l'erreur est envoyée dans `action.error`
      // je pourrais en profiter pour mettre en place un message d'erreur
      // console.log(action.error);
      // state.flash = {
      //   type: 'error',
      //   children: action.error.code || 'UNKNOWN_ERROR',
      //   duration: 5000,
      // };
    })
    .addCase(logout.fulfilled, (state) => {
      // je ré-initialise mes données depuis mon state initial
      state.logged = initialState.logged;
      state.firstname = initialState.firstname;
      console.log(state.logged);

      // à la déconnexion, je supprime le JWT de mon instance Axios
      delete axiosInstance.defaults.headers.common.Authorization;
    })
    .addCase(signup.fulfilled, (state, action) => {
      state.logged = true;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.description = action.payload.description;
      state.address = action.payload.address;
      state.localization = action.payload.localization;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.thumbnail = action.payload.thumbnail;
    });
});

export default userReducer;
