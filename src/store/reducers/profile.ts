import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

import { Advert } from '../../@types';
import { Publication } from '../../@types/publication';
import axiosInstance from '../../utils/axios';

interface ProfileState {
  id: number;
  firstname: string;
  lastname: string;
  description: string;
  city: string;
  thumbnail: string;
  slug: string;
  posts: Publication[];
  likes: Publication[];
  adverts: Advert[];
  created_at: string;
  liked: Publication[];


  error?: string;
  isLoading: boolean;
}
export const initialState: ProfileState = {
  id: 0,
  firstname: '',
  lastname: '',
  description: '',
  city: '',
  thumbnail: '',
  slug: '',
  posts: [],
  likes: [],
  adverts: [],
  created_at: '',
  liked: [],

  error: '',
  isLoading: false,
};

export const fetchProfile = createAsyncThunk(
  'user/fetchProfile',
  async (slug: string | undefined) => {
    try {
      console.log('slug : ', slug);
      
      const { data } = await axiosInstance.get(`/profile/${slug}`);
      console.log(data);
      
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

const profileReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchProfile.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.id = action.payload.id;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.thumbnail = action.payload.thumbnail;
      state.city = action.payload.city;
      state.slug = action.payload.slug;
      state.description = action.payload.description;
      state.posts = action.payload.posts;
      state.likes = action.payload.likes;
      state.adverts = action.payload.adverts;
    })
    .addCase(fetchProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
});

export default profileReducer;
