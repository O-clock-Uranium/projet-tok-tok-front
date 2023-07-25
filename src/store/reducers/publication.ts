import {
    createAction,
    createAsyncThunk,
    createReducer,
} from '@reduxjs/toolkit';

import { Creator, Likes, Publication, Replies } from '../../@types/publication';

import axiosInstance from '../../utils/axios';

interface PublicationState {
  publication: Publication[];
  list: Publication[];
  favourites: Publication[];
  isLoading: boolean;
  error: string | null;
  //   id: number | null;
  //   content: string | null;
  //   thumbnail: string | null;
  //   user_id: number | null;
  //   created_at: number | null;
  //   reply_to: Publication[] | null;
  //   post_creator: Creator[] | null;
  //   users_liked: Likes[] | null;
  //   replies: Replies[] | null;
}

export const initialState: PublicationState = {
  publication: [],
  list: [],
  favourites: [],
  isLoading: false,
  error: null,
  //   id: null,
  //   content: null,
  //   thumbnail: null,
  //   user_id: null,
  //   created_at: null,
  //   reply_to: Publication[],
  //   post_creator: Creator[],
  //   users_liked: Likes[],
  //   replies: Replies[],
};

// eslint-disable-next-line import/prefer-default-export
export const fetchPosts = createAsyncThunk(
  'publication/fetchPosts',
  async () => {
    const { data } = await axiosInstance.get<Publication[]>('/posts');
    return data;
  }
);

export const addPost = createAsyncThunk(
  'publication/addPost',
  async (formData, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/posts', formData);
      return data as Publication[];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);

const publicationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPosts.pending, (state) => {
      // state.isLoading -> A créer dans le UIReducer avec SnackBar
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.list = action.payload;
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      // Erreur a récup + SnackBar à changer de state
    })
    .addCase(addPost.pending, (state) => {
      // state.isLoading -> A créer dans le UIReducer avec SnackBar
      state.isLoading = true;
      state.error = null;
    })
    .addCase(addPost.fulfilled, (state, action) => {
      //   state.publication = action.payload;
      //   state.publication.push(action.payload);
    });
});
