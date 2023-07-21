import {
    createAction,
    createAsyncThunk,
    createReducer
} from '@reduxjs/toolkit';
import axios from 'axios';

import { Flash } from '../../@types';

interface SettingsState {
  isOpen: boolean;
  isLoading: boolean;
  pseudo: string | null;
  flash: Flash | null;
}
const initialState: SettingsState = {
  isOpen: false,
  isLoading: false,
  pseudo: null,
  flash: null,
};

export const toggleSettings = createAction('settings/toggle');
export const logout = createAction('settings/logout');

/*
    Un Thunk est une fonction qui va exécuter mon appel API
    et retourner/générer 3 actions
    - thunk_name.pending : la promesse est en cours
    - thunk_name.fulfilled : la promesse est résolue
    - thunk_name.rejected : la promesse est rejetée
    Les arguments passés au dispatch de mon thunk sont automatiquement
    récupérés en paramètres de mon callback
  */
export const login = createAsyncThunk(
  'settings/login',
  async (formData: FormData) => {
    const objData = Object.fromEntries(formData);
    const { data } = await axios.post<{ pseudo: string }>(
      'http://localhost:3001/login',
      objData
    );
    return data; // { pseudo: 'John' }
  }
);
const settingsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleSettings, (state) => {
      state.isOpen = !state.isOpen;
    })
    .addCase(logout, (state) => {
      state.pseudo = null;
    })
    // La promesse du Thunk est en cours
    .addCase(login.pending, (state, action) => {
      console.log(action);
      // je pourrais en profiter pour mettre en place un système de loading
      state.isLoading = true;
      // je supprime le message flash actuel
      state.flash = null;
    })
    // La promesse du Thunk est finie et résolue
    .addCase(login.fulfilled, (state, action) => {
      console.log(action);
      // dans action, j'ai automatiquement la réponse de mon appel
      // dans le payload
      console.log(action.payload); // { pseudo: 'John' }
      // je sauvegarde mon utilisateur
      state.pseudo = action.payload.pseudo;
      // la promesse est finie
      state.isLoading = false;
      // je ferme les Settings
      state.isOpen = false;
      // j'affiche un message de succès
      state.flash = {
        type: 'success',
        children: `Bienvenue ${action.payload.pseudo} !`,
      };
    })
    // La promesse du Thunk est finie et rejetée
    .addCase(login.rejected, (state, action) => {
      console.log(action);
      // l'erreur est envoyée dans `action.error`
      // je pourrais en profiter pour mettre en place un message d'erreur
      console.log(action.error);
      // la promesse est finie
      state.isLoading = false;
      // j'affiche un message d'erreur
      state.flash = {
        type: 'error',
        children: action.error.code || 'UNKNOWN_ERROR',
        duration: 5000,
      };
    });
});
export default settingsReducer;
