import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

import { Publication } from '../../@types/publication';

import axiosInstance from '../../utils/axios';

interface PublicationState {
  // publication: Publication;
  list: Publication[];
  isLoading: boolean;
  error: string | null;
}

export const initialState: PublicationState = {
  // publication: {
  //   id: null,
  //   content: null,
  //   thumbnail: null,
  //   user_id: null,
  //   created_at: null,
  //   reply_to: null,
  //   post_creator: null,
  //   users_liked: [],
  //   replies: [],
  // },
  list: [],
  isLoading: false,
  error: null,
};

// eslint-disable-next-line import/prefer-default-export
export const fetchPosts = createAsyncThunk(
  'publications/fetchPosts',
  async () => {
    const { data } = await axiosInstance.get<Publication[]>('/posts');
    console.log(data);
    return data;
  }
);

export const addPost = createAsyncThunk(
  'publications/addPost',
  async (formData) => {
    // try {
    const { data } = await axiosInstance.post('/posts', formData);
    return data as Publication[];
    // } catch (error) {
    // }
  }
);

export const delPost = createAsyncThunk('publications/delPost', async (id) => {
  // try {
  const { data } = await axiosInstance.delete('/posts/:id', id);
  // } catch (error) {
  // }
});

const publicationsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    })
    .addCase(addPost.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addPost.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(delPost.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(delPost.fulfilled, (state, action) => {
      console.log('ok');
    });
});

export default publicationsReducer;
