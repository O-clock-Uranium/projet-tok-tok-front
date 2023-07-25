import {
    createAction,
    createAsyncThunk,
    createReducer,
} from '@reduxjs/toolkit';

import { Creator, Likes, Publication, Replies } from '../../@types/publication';

import axiosInstance from '../../utils/axios';

interface PublicationState {
  id: number | null;
  content: string | null;
  thumbnail: string | null;
  user_id: number | null;
  created_at: number | null;
  //   reply_to: Publication[] | null;
  //   post_creator: Creator[] | null;
  //   users_liked: Likes[] | null;
  //   replies: Replies[] | null;
}

export const initialState: PublicationState = {
  id: null,
  content: null,
  thumbnail: null,
  user_id: null,
  created_at: null,
  // reply_to: Publication[],
  // post_creator: Creator[],
  // users_liked: Likes[],
  // replies: Replies[],
};

// eslint-disable-next-line import/prefer-default-export
export const fetchPosts = createAsyncThunk(
  'publication/fetchPosts',
  async () => {
    const { data } = await axiosInstance.get('/posts');
    return data;
  }
);

const publicationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPosts.pending, (state) => {})
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.id = action.payload;
      state.content = action.payload;
      state.thumbnail = action.payload;
      state.user_id = action.payload;
      state.created_at = action.payload;
    });
    .addCase(fetchPosts.rejected, (state, action) =>{
        
    })
});
